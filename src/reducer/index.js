import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import magazine from './magazine';

const persistConfig = {
  key: 'root',
  storage,
  // user reducer만 localstorage에 저장
  whitelist: ['user', 'magazine'],
};

const rootReducer = combineReducers({ user, magazine });

export default persistReducer(persistConfig, rootReducer);
