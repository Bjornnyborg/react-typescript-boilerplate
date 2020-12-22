import { createReducer } from "deox";
import { produce } from "immer";
import { UserActions } from "./actions";
import { UserState } from "./types";

const initialState: UserState = {
  email: null,
  loggedInAt: null,
};

export const UserReducer = createReducer(initialState, (handleAction) => [
  handleAction(UserActions.CLEAN, (state) => {
    return produce(state, (draft) => {
      draft.email = null;
      draft.loggedInAt = null;
    });
  }),
  handleAction(UserActions.STORE, (state, { payload }) => {
    return produce(state, (draft) => {
      draft.email = payload.user.email;
      draft.loggedInAt = payload.user.loggedInAt;
    });
  }),
]);
