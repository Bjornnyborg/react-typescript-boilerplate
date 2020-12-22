export type NotificationType = "success" | "error" | "warning";

export interface Notification {
  title: string;
  message?: string;
  type: NotificationType;
  time?: number;
  id?: string;
}

export interface NotificationState {
  notifications: Notification[];
}
