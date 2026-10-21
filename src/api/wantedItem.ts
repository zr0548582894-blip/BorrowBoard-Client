import type { WantedItem, WantedItemFilters, WantedItemInput, WantedItemUpdate } from "../types/wantedItem";
import { api } from "./api";

export const getWantedItems = async (filter: WantedItemFilters) => {
  const response = await api.get<{ items: WantedItem[] }>("/wanted-items", {
    params: { limit: 50, ...filter },
  });
  return response.data.items;
};

export const getMyWantedItems = async () => {
  const response = await api.get<WantedItem[]>("/wanted-items/mine");
  return response.data;
};

export const getWantedItemById = async (id: number) => {
  const response = await api.get<WantedItem>(`/wanted-items/${id}`);
  return response.data;
};

export const addWantedItem = async (w: WantedItemInput) => {
  const response = await api.post<WantedItem>("/wanted-items", w);
  return response.data;
};

export const editWantedItem = async (id: number, w: WantedItemUpdate) => {
  const response = await api.put<WantedItem>(`/wanted-items/${id}`, w);
  return response.data;
};

export const deleteWantedItem = async (id: number) => {
  await api.delete(`/wanted-items/${id}`);
};