import { defineEventHandler, createError } from 'h3';
import { UserRepository } from '@intern/domain';
import { requireAuth } from '../../utils/auth';
import { ERROR_MESSAGES, HttpStatus } from '@intern/factory';

export default defineEventHandler(async (event) => {
  const userContext = await requireAuth(event);
  
  const user = await UserRepository.findById(userContext.id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }

  const { password, refreshToken, ...safeUser } = user;

  return safeUser;
});
