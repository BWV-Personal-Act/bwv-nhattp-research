import { defineEventHandler, createError } from 'h3';
import { requireAuth } from '../../utils/auth';
import { validateBody } from '../../utils/validate';
import { baseTransferSchema, ERROR_MESSAGES, HttpStatus, SUCCESS_MESSAGES } from '@intern/factory';
import { TransferLogRepository } from '@intern/domain';

export default defineEventHandler(async (event) => {
  const userContext = await requireAuth(event);
  const body = await validateBody(event, baseTransferSchema);

  try {
    await TransferLogRepository.transferBalance(
      userContext.id,
      body.toUserId,
      body.amount
    );

    return { message: SUCCESS_MESSAGES.TRANSFER };
  } catch (error: any) {
    if (error.message === 'User not found') {
      throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    if (error.message === 'Insufficient balance') {
      throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.INSUFFICIENT_BALANCE });
    }

    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
});
