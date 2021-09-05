import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';


// const sagaMiddleware = createSagaMiddleware();
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

// // single reducer
// const store = configureStore({
//   reducer: postsReducer,
//   // reducer: categoriesReducer,
//   middleware: customizedMiddleware
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customizedMiddleware),
// })

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: [...customizedMiddleware, reduxLogger]
});

// sagaMiddleware.run(rootSaga);

export default store;
