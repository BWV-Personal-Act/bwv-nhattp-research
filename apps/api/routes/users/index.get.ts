import { defineEventHandler } from 'h3';
import { UserRepository } from '@intern/domain';

export default defineEventHandler(async () => {
  const allUsers = await UserRepository.findAll();
  const safeUsers = allUsers.map(({ password, refreshToken, ...user }) => user);
  
  return safeUsers;
});
