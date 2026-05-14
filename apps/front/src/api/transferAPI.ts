import axiosInstance from './config';
import { TransferBalanceDto, PaginatedLogs } from '@intern/factory';
import type { MessageResponse } from './types';
import { APP_ROUTES } from '@intern/factory';

export const transferAPI = {
  transferBalance: (data: TransferBalanceDto) =>
    axiosInstance.post<MessageResponse>(
      APP_ROUTES.BACKEND.TRANSFER.BASE,
      data
    ),

  getAllLogs: (
    page: number,
    limit: number,
    search?: string,
    startDate?: string,
    endDate?: string
  ) =>
    axiosInstance.get<PaginatedLogs>(APP_ROUTES.BACKEND.TRANSFER.LOGS, {
      params: { page, limit, search, startDate, endDate },
    }),

  getUserLogs: (
    userId: number,
    page: number,
    limit: number,
    search?: string,
    startDate?: string,
    endDate?: string
  ) =>
    axiosInstance.get<PaginatedLogs>(APP_ROUTES.BACKEND.TRANSFER.LOGS_USER(userId), {
      params: { page, limit, search, startDate, endDate },
    }),
};

export default axiosInstance;
