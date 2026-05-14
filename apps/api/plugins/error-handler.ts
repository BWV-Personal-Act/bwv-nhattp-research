import { defineNitroPlugin } from 'nitropack/runtime/plugin';
import { H3Error } from 'h3';
import { ERROR_MESSAGES } from '@intern/factory';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, { event }) => {
    if (!event) return;

    const h3Error = error as H3Error;
    const statusCode = h3Error.statusCode || 500;
    const message = h3Error.statusMessage || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    const data = h3Error.data || null;

    const response = {
      message,
      ...(data && { errors: data })
    };

    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.statusCode = statusCode;
    event.node.res.end(JSON.stringify(response));
  });
});
