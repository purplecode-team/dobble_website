import { combineReducers } from 'redux';
import user from './user';
import magazine from './magazine';

const rootReducer = combineReducers({ user, magazine });

export default rootReducer;
