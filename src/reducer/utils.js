export const stateAction = (state) => {
  const ACTION_REQUEST = `${state}_REQUEST`;
  const ACTION_SUCCESS = `${state}_SUCCESS`;
  const ACTION_FAILURE = `${state}_FAILURE`;

  return [ACTION_REQUEST, ACTION_SUCCESS, ACTION_FAILURE];
};

export const SET_CURRENT_MAGAZINE = 'set_current_magazine';

export const UPDATE_USER = 'update_user';
