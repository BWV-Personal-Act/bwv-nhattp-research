import axiosInstance from './config';
import { UserFromApi, UpdateUserDto } from '@intern/factory';
import { APP_ROUTES } from '@intern/factory';
import type { MessageResponse } from './types';

export const userAPI = {
  getAllUsers: () => axiosInstance.get<UserFromApi[]>(APP_ROUTES.BACKEND.USER.BASE),
  getUserById: (id: number) =>
    axiosInstance.get<UserFromApi>(APP_ROUTES.BACKEND.USER.GET_BY_ID(id)),
  updateUser: (id: number, data: UpdateUserDto) =>
    axiosInstance.put<MessageResponse>(APP_ROUTES.BACKEND.USER.GET_BY_ID(id), data),
  deleteUser: (id: number) =>
    axiosInstance.delete<MessageResponse>(APP_ROUTES.BACKEND.USER.GET_BY_ID(id)),
};

export default axiosInstance;
