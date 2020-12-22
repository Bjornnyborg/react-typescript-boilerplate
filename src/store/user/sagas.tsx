import { ActionType } from "deox";
import { delay, put } from "redux-saga/effects";
import { LoadingActions } from "../loading/actions";
import { NotificationActions } from "../notification/actions";
import { UserActions } from "./actions";

export const UserSagas = {
  *LOGIN({ payload }: ActionType<typeof UserActions.LOGIN>) {
    yield put(LoadingActions.START("user"));

    yield delay(2000);

    if (payload.password === "qwerty1234") {
      yield put(NotificationActions.PUSH({ title: "Now logged in", type: "success" }));
      yield put(
        UserActions.STORE({
          email: payload.email,
          loggedInAt: new Date().toDateString(),
        }),
      );
    } else {
      yield put(NotificationActions.PUSH({ title: "Error", message: "Wrong password", type: "error" }));
    }

    yield put(LoadingActions.STOP("user"));
  },
  *LOGOUT() {
    yield put(NotificationActions.PUSH({ title: "Now logged out", type: "success" }));
    yield put(UserActions.CLEAN());
  },
};
