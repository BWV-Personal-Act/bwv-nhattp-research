import { H3Event, readBody, createError } from 'h3';
import { Schema, InferType } from 'yup';
import { ERROR_MESSAGES, HttpStatus } from '@intern/factory';

// Dùng InferType<T> để tự động lấy kiểu từ Yup schema
export async function validateBody<T extends Schema>(
  event: H3Event, 
  schema: T
): Promise<InferType<T>> {
  const body = await readBody(event).catch(() => ({}));

  try {
    const validatedData = await schema.validate(body, { 
      abortEarly: false, 
      stripUnknown: true 
    });
    
    return validatedData;
  } catch (error: any) {
    throw createError({ 
      statusCode: HttpStatus.BAD_REQUEST, 
      statusMessage: ERROR_MESSAGES.VALIDATION_ERROR, 
      data: error.errors 
    });
  }
}
