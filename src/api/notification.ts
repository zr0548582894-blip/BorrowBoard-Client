import type { Notification, NotificationList } from "../types/notification";
import { api } from "./api";

export const getNotifications = async (unread?: boolean) => {
  const response = await api.get<NotificationList>("/notifications", {
    params: { unread },
  });
  return response.data;
};

export const markNotificationRead = async (id: number) => {
  const response = await api.patch<Notification>(`/notifications/${id}/read`);
  return response.data;
};

export const markAllNotificationsRead = async () => {
  const response = await api.patch<{ updated: number }>("/notifications/read-all");
  return response.data;
};