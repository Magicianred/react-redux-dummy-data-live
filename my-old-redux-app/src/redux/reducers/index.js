import { combineReducers } from 'redux';
import posts from './posts';

const reducers = combineReducers({
    posts
});

const rootReducer = (state, action) => {
    return reducers(state, action);
}

export default rootReducer;
