import { combineReducers } from "redux";
import { LoadingReducer } from "./loading/reducer";
import { LoadingState } from "./loading/types";
import { NotificationReducer } from "./notification/reducer";
import { NotificationState } from "./notification/types";
import { UserReducer } from "./user/reducer";
import { UserState } from "./user/types";

export interface RootState {
  user: UserState;
  notifications: NotificationState;
  loading: LoadingState;
}

export const createReducers = () =>
  combineReducers({
    user: UserReducer,
    notifications: NotificationReducer,
    loading: LoadingReducer,
  });
