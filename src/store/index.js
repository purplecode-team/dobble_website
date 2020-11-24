// import { createStore } from 'redux';
// import rootReducer from '../reducer';
//
// const store = createStore(rootReducer);
//
// export default store;
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
