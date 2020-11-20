import { combineReducers } from 'redux';
import menuState from './menuState';
import user from './user';

const rootReducer = combineReducers({
  menuState,
  user,
});

export default rootReducer;
