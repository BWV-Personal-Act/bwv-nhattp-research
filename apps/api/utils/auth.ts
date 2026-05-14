import { H3Event, getHeader, createError } from 'h3';
import jwt from 'jsonwebtoken';
import { UserRepository } from '@intern/domain';
import { ERROR_MESSAGES, HttpStatus } from '@intern/factory';

export async function requireAuth(event: H3Event) {
  const authHeader = getHeader(event, 'authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }

  const token = authHeader.split(' ')[1];

  if (!process.env.JWT_ACCESS_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET) as { id: number };
    const user = await UserRepository.findById(decoded.id);
    
    if (!user) {
      throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
    }
    
    event.context.user = user;
    return user;
  } catch (error) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }
}
