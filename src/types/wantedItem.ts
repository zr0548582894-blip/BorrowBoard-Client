import type { DateString, DateTimeString, SortOrder } from './common';
import type { Category } from './category';
import type { PublicUser } from './user';

export type WantedItemStatus = 'OPEN' | 'CLOSED';

export interface WantedItem {
  id: number;
  requesterId: number;
  title: string;
  description: string;
  categoryId: number;
  city: string;
  imageUrl: string | null;
  neededFrom: DateString | null;
  neededUntil: DateString | null;
  status: WantedItemStatus;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  category: Category;
  requester: PublicUser;
  pendingOffersCount: number;
}

export interface WantedItemInput {
  title: string;
  description: string;
  categoryId: number;
  city: string;
  imageUrl?: string | null;
  neededFrom?: DateString | null;
  neededUntil?: DateString | null;
}

export interface WantedItemUpdate extends Partial<WantedItemInput> {
  status?: WantedItemStatus;
}

export interface WantedItemFilters {
  search?: string;
  categoryId?: number;
  city?: string;
  status?: WantedItemStatus;
  sort?: SortOrder;
  page?: number;
  limit?: number;
}
export interface WantedItemCard {
  id:number
  name: string;
  description: string;
  imageUrl: string | null;
  status: WantedItemStatus;
}