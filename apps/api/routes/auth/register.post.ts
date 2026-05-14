import { defineEventHandler, createError } from 'h3';
import bcrypt from 'bcrypt';
import { UserRepository } from '@intern/domain';
import { validateBody } from '../../utils/validate';
import { backendRegisterSchema, ERROR_MESSAGES, HttpStatus } from '@intern/factory';
import { applyResponseStatus } from '../../utils/response';

export default defineEventHandler(async (event) => {
  const body = await validateBody(event, backendRegisterSchema);

  const existingUser = await UserRepository.findByEmail(body.email);
  if (existingUser) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.EMAIL_ALREADY_EXISTS });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);
  
  const [result] = await UserRepository.create({
    email: body.email,
    name: body.name,
    password: hashedPassword,
    nationality: body.nationality,
    balance: 1000,
  });

  applyResponseStatus(event, HttpStatus.CREATED);
  return { id: result.insertId };
});
