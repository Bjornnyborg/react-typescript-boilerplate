import { createReducer } from "deox";
import { produce } from "immer";
import { NotificationActions } from "./actions";
import { NotificationState } from "./types";

const initialState: NotificationState = {
  notifications: [],
};

export const NotificationReducer = createReducer(initialState, (handleAction) => [
  handleAction(NotificationActions.STORE, (state, { payload }) => {
    return produce(state, (draft) => {
      draft.notifications.push(payload.notification);
    });
  }),
  handleAction(NotificationActions.CLEAN, (state, { payload }) => {
    return produce(state, (draft) => {
      draft.notifications = draft.notifications.filter((x) => x.time !== payload.time);
    });
  }),
]);
