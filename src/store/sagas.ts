import { all, fork } from "redux-saga/effects";

//public
import SigninSaga from "store/auth/saga";
export default function* rootSaga() {
  yield all([fork(SigninSaga)]);
}
