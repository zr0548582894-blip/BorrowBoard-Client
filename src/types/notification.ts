import type { DateTimeString } from './common';

export type NotificationType =
  | 'BORROW_REQUESTED'
  | 'BORROW_APPROVED'
  | 'BORROW_REJECTED'
  | 'BORROW_CANCELLED'
  | 'BORROW_RETURNED'
  | 'OFFER_RECEIVED'
  | 'OFFER_ACCEPTED'
  | 'OFFER_REJECTED'
  | 'OFFER_CANCELLED';

export interface Notification {
  id: number;
  userId: number;
  type: NotificationType;
  text: string;
  link: string | null;
  isRead: boolean;
  createdAt: DateTimeString;
}

export interface NotificationList {
  items: Notification[];
  unreadCount: number;
}