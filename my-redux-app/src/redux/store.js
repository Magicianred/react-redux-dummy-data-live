import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';

import loaderReducer from './slices/loader';
import postsReducer from './slices/posts';
import categoriesReducer from './slices/categories';

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

// multiple reducers
const rootReducer = combineReducers({
  loader: loaderReducer,
  posts: postsReducer,
  categories: categoriesReducer
});

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware
});

// sagaMiddleware.run(rootSaga);

export default store;
