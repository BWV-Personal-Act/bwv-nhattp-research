import { defineEventHandler } from 'h3';
import { UserRepository } from '@intern/domain';
import { requireAuth } from '../../utils/auth';
import { SUCCESS_MESSAGES } from '@intern/factory';

export default defineEventHandler(async (event) => {
  const user = await requireAuth(event);
  
  await UserRepository.update(user.id, { refreshToken: null });

  return { message: SUCCESS_MESSAGES.LOGOUT };
});
