import update from 'immutability-helper';
import isArray from 'lodash/isArray';

import { transformToList } from './../../../transformations/posts';
import {
    getDummyDataPosts
} from './../../../dummydata/posts';

import {
    // FETCH_POSTS,

    // DUMMY DATA
    FETCH_POSTS_DUMMY_DATA
} from './../../actionTypes/posts';


/**
 * LIST REDUCER
 */
const emptyInitialState = {

}

// variables for dummy data
let dummyDataSize = 25;
// let dummyData = default_complete_list_dummy_data;

const list = (state = emptyInitialState, action) => {
    switch (action.type) {

        case FETCH_POSTS_DUMMY_DATA: {

            let query = '';
            if(action && action.payload) {
                query = action.payload.query;
            }

            let currentDummyData = getDummyDataPosts(query);
            if(currentDummyData && isArray(currentDummyData)) {
                currentDummyData = transformToList(currentDummyData);
            }

            const page = 0;
            const howForPage = dummyDataSize * page;
            const hasNextPage = currentDummyData && isArray(currentDummyData) 
                && howForPage < currentDummyData.length ? true : false;

            const resultList = currentDummyData && isArray(currentDummyData) ?
                currentDummyData.slice(0, dummyDataSize) : [];

            const data = {
                totalSize: currentDummyData && isArray(currentDummyData) ?
                    currentDummyData.length : 0,
                page: 0,
                pageSize: dummyDataSize,
                result: resultList
            };

            return update(state, {
                isLoading: { $set: false },
                hasNextPage: { $set: hasNextPage },
                query: { $set: query },
                data: { $set: data }
            });
        }

        default: {
            return state;
        }
    }
}

export default list;
