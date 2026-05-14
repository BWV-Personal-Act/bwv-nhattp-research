import { defineEventHandler, createError } from 'h3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '@intern/domain';
import { validateBody } from '../../utils/validate';
import { backendLoginSchema, ERROR_MESSAGES, HttpStatus } from '@intern/factory';

export default defineEventHandler(async (event) => {
  const body = await validateBody(event, backendLoginSchema);

  const user = await UserRepository.findByEmail(body.email);
  
  const passwordHash = user ? user.password : await bcrypt.hash('dummy_password', 10);
  const isMatch = await bcrypt.compare(body.password, passwordHash);

  if (!isMatch || !user) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }
  
  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
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

  const { password, refreshToken: _, ...safeUser } = user;

  return { user: safeUser, accessToken, refreshToken };
});
