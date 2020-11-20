import produce from 'immer';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_REQUEST_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_REQUEST_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_REQUEST_FAILURE';

export const loginRequest = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequest = () => ({
  type: LOG_OUT_REQUEST,
});

const initialState = {
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
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
      default:
        break;
    }
  });
}
export default user;
