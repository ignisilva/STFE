import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

export default function* rootSaga() {
  yield all([
    // 하위 saga
    authSaga(),
  ]);
}
