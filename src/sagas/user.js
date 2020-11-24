import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducer/user';

// function loginAPI(data) {
//   return axios.post('/api/login', data);
// }
function* login(action) {
  try {
    yield delay(1000);
    // const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
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
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
