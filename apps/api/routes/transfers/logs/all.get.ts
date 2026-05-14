import { defineEventHandler, getQuery } from 'h3';
import { requireAuth } from '../../../utils/auth';
import { TransferLogRepository } from '@intern/domain';

export default defineEventHandler(async (event) => {
  await requireAuth(event);
  const query = getQuery(event);

  const filters = {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || 10,
    startDate: query.startDate ? String(query.startDate) : undefined,
    endDate: query.endDate ? String(query.endDate) : undefined,
    search: query.search ? String(query.search) : undefined,
  };

  return await TransferLogRepository.findLogs(filters);
});