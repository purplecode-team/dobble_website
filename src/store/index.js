import { createStore } from 'redux';
import rootReducer from '../reducer';

const store = createStore(rootReducer);

export default store;
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
//
// import rootReducer from '../reducer';
// import rootSaga from '../sagas';
// const sagaMiddleware = createSagaMiddleware();
//
// const configureStore = () => {
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   sagaMiddleware.run(rootSaga);
//   const store = createStore(rootReducer);
//   return store;
// };
//
// export default configureStore;
