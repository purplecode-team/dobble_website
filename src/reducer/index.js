import { combineReducers } from 'redux';
import menuState from './menuState';

const rootReducer = combineReducers({
  menuState,
});

export default rootReducer;
