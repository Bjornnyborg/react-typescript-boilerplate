import { createActionCreator } from "deox";
import { Notification } from "./types";

const PREFIX = "NOTIFICATION";

export const NotificationActions = {
  PUSH: createActionCreator(`${PREFIX}/PUSH`, (resolve) => (notification: Notification) =>
    resolve({
      notification,
    }),
  ),
  STORE: createActionCreator(`${PREFIX}/STORE`, (resolve) => (notification: Notification) =>
    resolve({
      notification,
    }),
  ),
  CLEAN: createActionCreator(`${PREFIX}/CLEAN`, (resolve) => (time: number) =>
    resolve({
      time,
    }),
  ),
};
