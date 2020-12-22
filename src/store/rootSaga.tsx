import { takeEvery, takeLatest } from "redux-saga/effects";
import { NotificationActions } from "./notification/actions";
import { NotificationSagas } from "./notification/sagas";
import { UserActions } from "./user/actions";
import { UserSagas } from "./user/sagas";

export function* rootSaga() {
  // USER SAGAS
  yield takeLatest(UserActions.LOGIN, UserSagas.LOGIN);
  yield takeLatest(UserActions.LOGOUT, UserSagas.LOGOUT);

  // NOTIFICATION SAGAS
  yield takeEvery(NotificationActions.PUSH, NotificationSagas.PUSH);
}
