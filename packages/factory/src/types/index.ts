import { Nationality } from '../enums/nationality.enum';

export interface AppConfig {
  locale: string;
  currency: string;
}

export interface UserFromApi {
  id: number;
  email: string;
  name: string;
  nationality: Nationality;
  balance: number;
  createdAt: string;
  updatedAt: string;
}

export interface UserForm {
  email: string;
  name: string;
  nationality: Nationality | '';
  balance: number;
}

export interface TransferBalanceDto {
  toUserId: number;
  amount: number;
}

export interface TransferLogData {
  id: number;
  senderId: number;
  receiverId: number;
  amount: number | string;
  status: string;
  message: string | null;
  createdAt: string;
  sender: { id: number; name: string; email: string };
  receiver: { id: number; name: string; email: string };
}

export interface PaginatedLogs {
  total: number;
  page: number;
  totalPages: number;
  data: TransferLogData[];
}
