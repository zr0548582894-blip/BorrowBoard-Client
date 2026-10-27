
import type { DateString, DateTimeString, SortOrder } from './common';
import type { Category } from './category';
import type { PublicUser } from './user';
 
export const PRODUCT_CONDITIONS = ["NEW", "LIKE_NEW", "USED"] as const;
export type ProductCondition = (typeof PRODUCT_CONDITIONS)[number];
 
export const PRODUCT_STATUSES = ["AVAILABLE", "BORROWED"] as const;
export type ProductStatus = (typeof PRODUCT_STATUSES)[number];
 
 
 
export interface Product {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  categoryId: number;
  condition: ProductCondition;
  city: string;
  imageUrl: string | null;
  maxDays: number | null;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  status: ProductStatus;
  category: Category;
  owner: PublicUser;
}
 
export interface BookedPeriod {
  startDate: DateString;
  endDate: DateString;
}
 
/** GET /api/products/:id */
export interface ProductDetails extends Product {
  bookedPeriods: BookedPeriod[];
}
 
/** GET /api/products/mine */
export interface MyProduct extends Product {
  pendingRequestsCount: number;
}
 
export interface ProductInput {
  name: string;
  description: string;
  categoryId: number;
  condition: ProductCondition;
  city: string;
  imageUrl?: string | null;
  maxDays?: number | null;
}
 
export interface ProductFilters {
  search?: string;
  categoryId?: number;
  city?: string;
  condition?: ProductCondition;
  status?: ProductStatus;
  ownerId?: number;
  sort?: SortOrder;
}
 
export interface ProductCard {
  id:number
  name: string;
  description: string;
  condition: ProductCondition;
  imageUrl: string | null;
  status: ProductStatus;
}