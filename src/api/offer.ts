import type { Offer, OfferFilters, OfferInput } from "../types/offer";
import { api } from "./api";

export const createOffer = async (wantedItemId: number, o: OfferInput) => {
  const response = await api.post<Offer>(`/wanted-items/${wantedItemId}/offers`, o);
  return response.data;
};

export const getMyOffers = async (filters: OfferFilters) => {
  const response = await api.get<Offer[]>("/offers", { params: filters });
  return response.data;
};

export const acceptOffer = async (id: number) => {
  const response = await api.patch<Offer>(`/offers/${id}/accept`);
  return response.data;
};

export const rejectOffer = async (id: number) => {
  const response = await api.patch<Offer>(`/offers/${id}/reject`);
  return response.data;
};

export const cancelOffer = async (id: number) => {
  const response = await api.patch<Offer>(`/offers/${id}/cancel`);
  return response.data;
};