import { takeEvery } from "redux-saga/effects";

export function* handlerSaga() {
  alert("Room Added!");
  yield console.log("hello");
}

export function* watcherSaga() {
  yield takeEvery("ADD_ROOM", handlerSaga);
}
