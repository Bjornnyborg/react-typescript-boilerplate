import { ActionType } from "deox";
import { put } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { NotificationActions } from "./actions";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const NotificationSagas = {
  *PUSH({ payload }: ActionType<typeof NotificationActions.PUSH>) {
    const time = Date.now();
    const id = payload.notification.id || uuidv4();
    yield put(NotificationActions.STORE({ ...payload.notification, time, id }));

    // Amount of delay for notification system
    yield delay(5000);
    yield put(NotificationActions.CLEAN(time));
  },
};
