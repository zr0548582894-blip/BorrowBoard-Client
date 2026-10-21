import type { User } from "../types/user";
import type { AdminStats, AdminUser, AdminUserFilters } from "../types/admin";
import { api } from "./api";

export const getStats = async () => {
  const response = await api.get<AdminStats>("/admin/stats");
  return response.data;
};

export const getUsers = async (filter: AdminUserFilters) => {
  const response = await api.get<{ items: AdminUser[] }>("/admin/users", {
    params: { limit: 100, ...filter },
  });
  return response.data.items;
};

export const blockUser = async (id: number) => {
  const response = await api.patch<User>(`/admin/users/${id}/block`);
  return response.data;
};

export const unblockUser = async (id: number) => {
  const response = await api.patch<User>(`/admin/users/${id}/unblock`);
  return response.data;
};