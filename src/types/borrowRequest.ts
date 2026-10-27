import type { Box, DateString, DateTimeString } from './common';
import type { ContactUser } from './user';

export const BORROW_REQUEST_STATUSES = [
  "PENDING",
  "APPROVED",
  "REJECTED",
  "RETURNED",
  "CANCELLED",
] as const;

export type BorrowRequestStatus = (typeof BORROW_REQUEST_STATUSES)[number];

export interface BorrowRequest {
  id: number;
  status: BorrowRequestStatus;
  startDate: DateString;
  endDate: DateString;
  message: string | null;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  product: {
    id: number;
    name: string;
    imageUrl: string | null;
  };
  borrower: ContactUser;
  owner: ContactUser;
}

export interface BorrowRequestInput {
  startDate: DateString;
  endDate: DateString;
  message?: string;
}

export interface BorrowRequestFilters {
  box?: Box;
  status?: BorrowRequestStatus;
}