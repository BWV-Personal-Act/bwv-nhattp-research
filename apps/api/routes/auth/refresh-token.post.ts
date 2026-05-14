import { defineEventHandler, readBody, createError } from 'h3';
import jwt from 'jsonwebtoken';
import { UserRepository } from '@intern/domain';
import { ERROR_MESSAGES, HttpStatus } from '@intern/factory';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body;

  if (!token) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.REFRESH_TOKEN_NOT_FOUND });
  }

  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as { id: number };
    const user = await UserRepository.findById(decoded.id);

    if (!user) {
      throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
    }

    if (user.refreshToken !== token) {
      throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.TOKEN_INVALID });
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email }, 
      process.env.JWT_ACCESS_SECRET, 
      { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') as jwt.SignOptions['expiresIn'] }
    );
  
    const refreshToken = jwt.sign(
      { id: user.id }, 
      process.env.JWT_REFRESH_SECRET, 
      { expiresIn: (process.env.JWT_REFRESH_EXPIRES_IN || '7d') as jwt.SignOptions['expiresIn'] }
    );

    await UserRepository.update(user.id, { refreshToken });

    return { accessToken, refreshToken };
  } catch (error) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.TOKEN_INVALID });
  }
});
