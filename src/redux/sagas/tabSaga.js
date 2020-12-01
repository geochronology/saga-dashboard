import { call, put, takeEvery } from "redux-saga/effects";
import { SWITCH_ACTIVE_TAB } from "../tabs/tabTypes";
import { switchActiveTab } from "../tabs/tabActions";

// worker
function* handleTabChange(action) {
  console.log("switching tab...")
}

// watcher
export default function* watchTabChange() {
  yield takeEvery(SWITCH_ACTIVE_TAB, handleTabChange)
}

