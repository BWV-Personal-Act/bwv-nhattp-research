import { H3Event, setResponseStatus } from 'h3';
import { HttpStatus } from '@intern/factory';

export function applyResponseStatus(event: H3Event, status: HttpStatus) {
  setResponseStatus(event, status);
}
