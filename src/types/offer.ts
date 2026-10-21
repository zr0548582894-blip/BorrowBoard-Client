import type { Box, DateTimeString } from './common';
import type { ProductCondition } from './product';
import type { WantedItemStatus } from './wantedItem';
import type { ContactUser } from './user';

export type OfferStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED';

export interface Offer {
  id: number;
  status: OfferStatus;
  message: string;
  condition: ProductCondition;
  imageUrl: string | null;
  createdAt: DateTimeString;
  wantedItem: {
    id: number;
    title: string;
    status: WantedItemStatus;
  };
  offerer: ContactUser;
  requester: ContactUser;
}

export interface OfferInput {
  message: string;
  condition: ProductCondition;
  imageUrl?: string | null;
}

export interface OfferFilters {
  box?: Box;
  status?: OfferStatus;
}