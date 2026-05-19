import { randomUUID } from 'node:crypto';
import { InferType } from 'yup';
import { readMultipartFormData } from 'h3';
import { errors, SUCCESS_MESSAGES, updateUserSchema } from '@intern/factory';
import { UserRepository } from '@intern/domain';
import BaseController from './_base';
import { deleteFromS3, getS3ObjectKeyFromUrl, uploadToS3 } from '~/utils/s3';
import { toPublicUser } from '~/utils/user';

const MAX_AVATAR_SIZE = 2 * 1024 * 1024;
const AVATAR_CONTENT_TYPE = 'image/jpeg';

class UsersController extends BaseController {
  public index = this.define(async (event) => {
    const allUsers = await UserRepository.findAll();
    const safeUsers = allUsers.map(toPublicUser);

    return this.ok(event, { rows: safeUsers });
  });

  public get = this.define(async (event) => {
    const id = this.getNumberParam(event, 'id');
    const user = await UserRepository.findByIdOrFail(id);

    return this.ok(event, { rows: toPublicUser(user) });
  });

  public update = this.define(async (event) => {
    const id = this.getNumberParam(event, 'id');
    const body = this.getValidatedBody<InferType<typeof updateUserSchema>>(event);
    const { balance, ...rest } = body;
    const updateData = {
      ...rest,
      ...(balance !== undefined ? { balance: String(balance) } : {}),
    };

    await UserRepository.findByIdOrFail(id);
    await UserRepository.update(id, updateData);

    return this.ok(event, { rows: { message: SUCCESS_MESSAGES.USER_UPDATE } });
  });

  public uploadAvatar = this.define(async (event) => {
    const id = this.getNumberParam(event, 'id');
    const authUser = this.getAuthUser(event);
    if (Number(authUser.id) !== id) {
      throw new errors.Forbidden();
    }

    const user = await UserRepository.findByIdOrFail(id);

    const formData = await readMultipartFormData(event);
    const avatar = formData?.find((item) => item.name === 'avatar' && item.filename);
    if (!avatar) {
      throw new errors.Argument('avatar', 'Avatar image is required');
    }

    if (avatar.data.length > MAX_AVATAR_SIZE) {
      throw new errors.Argument('avatar', 'Avatar image must not exceed 2MB');
    }

    if (avatar.type !== AVATAR_CONTENT_TYPE) {
      throw new errors.Argument('avatar', 'Avatar image must be a JPG file');
    }

    const avatarKey = `avatars/${id}-${Date.now()}-${randomUUID()}.jpg`;
    const avatarUrl = await uploadToS3({
      key: avatarKey,
      body: avatar.data,
      contentType: AVATAR_CONTENT_TYPE,
    });

    await UserRepository.update(id, { avatarUrl });
    const oldAvatarKey = getS3ObjectKeyFromUrl(user.avatarUrl);
    if (oldAvatarKey && oldAvatarKey !== avatarKey) {
      await deleteFromS3(oldAvatarKey);
    }

    const updatedUser = await UserRepository.findByIdOrFail(id);

    return this.ok(event, { rows: toPublicUser(updatedUser) });
  });

  public delete = this.define(async (event) => {
    const id = this.getNumberParam(event, 'id');

    await UserRepository.findByIdOrFail(id);
    await UserRepository.delete(id);

    return this.ok(event, { rows: { message: SUCCESS_MESSAGES.USER_DELETE } });
  });
}

export const usersController = new UsersController();
