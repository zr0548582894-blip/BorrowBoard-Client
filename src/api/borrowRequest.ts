import type { BorrowRequest, BorrowRequestFilters, BorrowRequestInput } from "../types/borrowRequest";
import { api } from "./api";

export const createBorrowRequest = async (productId: number, b: BorrowRequestInput) => {
  const response = await api.post<BorrowRequest>(`/products/${productId}/borrow-requests`, b);
  return response.data;
};

export const getMyBorrowRequests = async (filters: BorrowRequestFilters) => {
  const response = await api.get<BorrowRequest[]>("/borrow-requests", { params: filters });
  return response.data;
};

export const approveBorrowRequest = async (id: number) => {
  const response = await api.patch<BorrowRequest>(`/borrow-requests/${id}/approve`);
  return response.data;
};

export const rejectBorrowRequest = async (id: number) => {
  const response = await api.patch<BorrowRequest>(`/borrow-requests/${id}/reject`);
  return response.data;
};

export const markBorrowReturned = async (id: number) => {
  const response = await api.patch<BorrowRequest>(`/borrow-requests/${id}/return`);
  return response.data;
};

export const cancelBorrowRequest = async (id: number) => {
  const response = await api.patch<BorrowRequest>(`/borrow-requests/${id}/cancel`);
  return response.data;
};