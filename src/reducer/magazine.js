import { SET_CURRENT_MAGAZINE } from './utils';

export function setMagazine(currentMagazine) {
  return {
    type: SET_CURRENT_MAGAZINE,
    payload: currentMagazine,
  };
}

const initialMagazineState = {
  currentMagazine: null,
};

export default function magazine(state = initialMagazineState, action) {
  switch (action.type) {
    case SET_CURRENT_MAGAZINE:
      return {
        ...state,
        currentMagazine: action.payload,
      };
    default:
      return state;
  }
}
