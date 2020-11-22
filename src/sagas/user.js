import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS } from '../reducer/user';

function loginAPI(data) {
  return axios.post('/user/login', data);
}
function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_SUCCESS, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
