import type { User } from './user';

export interface AdminStats {
  users: number;
  blockedUsers: number;
  products: number;
  available: number;
  borrowed: number;
  pendingRequests: number;
  activeLoans: number;
  openWantedItems: number;
  categories: number;
}

export interface AdminUser extends User {
  borrowRequestCount: number;
  wantedItemCount: number;
}

export interface AdminUserFilters {
  search?: string;
  isBlocked?: boolean;
  page?: number;
  limit?: number;
}