import update from 'immutability-helper';
import remove from 'lodash/remove';
import filter from 'lodash/filter';

import { transformToDetails } from './../../../transformations/posts';
import {
    default_empty_post,
    default_complete_list
} from './../../../dummydata/posts';

import {
    FETCH_POST,

    // DUMMY DATA
    FETCH_POST_DUMMY_DATA,
    CREATE_POST_DUMMY_DATA,
    UPDATE_POST_DUMMY_DATA,
    DELETE_POST_DUMMY_DATA
} from './../../actionTypes/posts';

/**
 * DETAILS REDUCER
 */

const currentPostInitialState = {

}

// variables for dummy data
let currentItemDummyData = undefined;
let dummyData = default_complete_list;

const details = (state = currentPostInitialState, action) => {
    switch (action.type) {

        case FETCH_POST_DUMMY_DATA: {
            const id = action && action.payload ? +action.payload.id : 0;

            let data = filter(dummyData, item => item.id === id)[0];
            if(data) {
                currentItemDummyData = transformToDetails(data);
            }

            return update(state, {
                isLoading: { $set: false },
                data: { $set: currentItemDummyData }
            })
        }

        case CREATE_POST_DUMMY_DATA: {
            const newId = dummyData.length + 1;
            const newDummyData = { id: newId, ...default_empty_post }
            currentItemDummyData = transformToDetails(newDummyData);

            dummyData.push(currentItemDummyData);

            return update(state, {
                isLoading: { $set: false },
                data: { $set: currentItemDummyData }
            })
        }

        case UPDATE_POST_DUMMY_DATA: {
            const id = action.payload.id;
            let itemToUpdate = action.payload.data;
            itemToUpdate = transformToDetails(itemToUpdate);

            if(itemToUpdate) {
                remove(dummyData, item => item.id === id);
                dummyData.push(itemToUpdate);
            }

            return update(state, {
                isLoading: { $set: false },
                data: { $set: itemToUpdate }
            })
        }

        case DELETE_POST_DUMMY_DATA: {
            const id = action.payload.id;

            remove(dummyData, item => item.id === id);

            return state;
        }

        case FETCH_POST: {
            return update(state, {
                isLoading: { $set: false }
            })
        }

        default: {
            return state;
        }

    }
};

export default details;
