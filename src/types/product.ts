import type { DateString, DateTimeString, SortOrder } from './common';
import type { Category } from './category';
import type { PublicUser } from './user';

export type ProductCondition = 'NEW' | 'LIKE_NEW' | 'USED';
export type ProductStatus = 'AVAILABLE' | 'BORROWED';

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
  page?: number;
  limit?: number;
}