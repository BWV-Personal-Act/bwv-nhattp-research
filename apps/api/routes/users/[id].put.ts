import { defineEventHandler, getRouterParam, createError } from 'h3';
import { UserRepository } from '@intern/domain';
import { requireAuth } from '../../utils/auth';
import { validateBody } from '../../utils/validate';
import { updateUserSchema, ERROR_MESSAGES, HttpStatus, SUCCESS_MESSAGES } from '@intern/factory';

export default defineEventHandler(async (event) => {
  await requireAuth(event);
  
  const id = Number(getRouterParam(event, 'id'));
  if (isNaN(id)) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.BAD_REQUEST });
  }

  const body = await validateBody(event, updateUserSchema);

  const user = await UserRepository.findById(id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }

  await UserRepository.update(id, body);

  return { message: SUCCESS_MESSAGES.USER_UPDATE };
});
