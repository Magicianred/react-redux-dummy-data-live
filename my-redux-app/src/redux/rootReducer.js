import { combineReducers } from 'redux';

import loaderReducer from './slices/loader';
import postsReducer from './slices/posts';
import categoriesReducer from './slices/categories';


// multiple reducers
const rootReducer = combineReducers({
    loader: loaderReducer,
    posts: postsReducer,
    categories: categoriesReducer
  });

export default rootReducer;