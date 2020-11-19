import produce from 'immer';

const OPEN = 'menuState/OPEN';

export const toggleMenu = () => ({
  type: OPEN,
});

const initialState = {
  open: false,
};
function menuState(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case OPEN:
        draft.open = !draft.open;
        break;
      default:
        break;
    }
  });
}

export default menuState;
