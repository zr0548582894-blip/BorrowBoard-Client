import { useQuery } from "@tanstack/react-query";
import { getMyProducts, getProducts, getProductsById } from "../api/products";
import type { ProductFilters } from "../types/product";
import { getWantedItemById, getWantedItems } from "../api/wantedItem";
import type { WantedItemFilters } from "../types/wantedItem";
import { getCatergories } from "../api/category";
import { getMyBorrowRequests } from "../api/borrowRequest";
import type { BorrowRequestFilters } from "../types/borrowRequest";
import { getMyOffers } from "../api/offer";
import type { OfferFilters } from "../types/offer";
import { getCurrentUser } from "../api/auth";
import { getStats, getUsers } from "../api/admin";
import type { AdminUserFilters } from "../types/admin";




export const productsUseQuery = (key: string, filter: ProductFilters = {}) =>
  useQuery({
    queryKey: [key, filter],
    queryFn: () => getProducts(filter)
  });

export const WantedItemsUseQuery = (key: string, filter: WantedItemFilters = {}) =>
  useQuery({
    queryKey: [key, filter],
    queryFn: () => getWantedItems(filter)
  });
export const useCategoriesQuery = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => getCatergories(),
  });

export const ProductDtailsUseQuery = (key: number) =>
  useQuery(
    {
      queryKey: ["getProductsById", key],
      queryFn: () => getProductsById(key),
      enabled: !!key,
    }
  )
export const WantedItemDtailsUseQuery = (key: number) =>
  useQuery(
    {
      queryKey: ["getWantedItemById", key],
      queryFn: () => getWantedItemById(key),
      enabled: key > 0,
    }
  )
export const GetMyRequestsUseQuery = (userId: number | undefined, filters: BorrowRequestFilters = {}) =>
  useQuery(
    {
      queryKey: ["getMyBorrowRequests", userId, filters],
      queryFn: () => getMyBorrowRequests(filters)
    }
  )

export const GetMyOffersUseQuery = (userId: number | undefined, filters: OfferFilters = {}) =>
  useQuery(
    {
      queryKey: ["getMyOffers", userId, filters],
      queryFn: () => getMyOffers(filters)
    }
  )

export const GetMyProductsUseQuery = (userId: number | undefined) =>
  useQuery({
    queryKey: ["getMyProducts", userId],
    queryFn: getMyProducts,
  });

export const GetCurrentUser = () =>
  useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: getCurrentUser,
  });

  export const GetStats = () =>
  useQuery({
    queryKey: ["getStats"],
    queryFn: getStats,
  });
    export const GetUsers = (filters:AdminUserFilters={}) =>
  useQuery({
    queryKey: ["getUsers",filters],
    queryFn:()=> getUsers(filters),
  });