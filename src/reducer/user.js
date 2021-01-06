import produce from 'immer';
import { stateAction } from './utils';

export const [LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE] = stateAction('LOG_IN');
export const [LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE] = stateAction('LOG_OUT');
export const [SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE] = stateAction('SIGN_UP');

export const loginRequest = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequest = () => ({
  type: LOG_OUT_REQUEST,
});

export const signupRequest = () => ({
  type: SIGN_UP_REQUEST,
});

const initialState = {
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
};

function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginError = null;
        draft.loginDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.me = action.data;
        draft.loginDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutError = null;
        draft.logoutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        break;
    }
  });
}
export default user;
