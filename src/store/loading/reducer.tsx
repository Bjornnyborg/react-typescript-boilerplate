import { createReducer } from "deox";
import { produce } from "immer";
import { LoadingActions } from "./actions";
import { LoadingState } from "./types";

const initialState: LoadingState = {
  user: false,
};

export const LoadingReducer = createReducer(initialState, (handleAction) => [
  handleAction(LoadingActions.START, (state, { payload }) => {
    return produce(state, (draft) => {
      draft[payload.type] = true;
    });
  }),
  handleAction(LoadingActions.STOP, (state, { payload }) => {
    return produce(state, (draft) => {
      draft[payload.type] = false;
    });
  }),
]);
