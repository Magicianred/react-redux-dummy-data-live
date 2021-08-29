import { current, createSlice } from '@reduxjs/toolkit';
import isArray from 'lodash/isArray';

import { transformToList } from './../../transformations/posts';
import {
    getDummyDataPosts
} from './../../dummydata/posts';

import {
    POSTS_ENDPOINTS,
    USE_DUMMY_DATA
} from './../../enums/posts';

const SIZE_FOR_PAGE = 10;

// variables for dummy data
let dummyDataSize = 25;
// let dummyData = default_complete_list_dummy_data;

const name = 'posts';

export const postsReducer = createSlice({
  name,
  initialState: {
    isLoading: false,
    hasNextPage: false,
    query: undefined,
    data: { 
      totalSize: 0,
      page: 0,
      pageSize: 0,
      result: []
    }
  },
  reducers: {
    fetchPosts: (state, action = { payload: undefined}) => {
      console.log('fetchPosts -> state', current(state))
      console.log({action})
      let {
          page,
          pageSize,
          sort,
          order,
          query
      } = action.payload;

      // default params
      page = page ? page : 1;
      pageSize = pageSize ? pageSize : SIZE_FOR_PAGE;
      sort = sort ? sort : 'createDate';
      order = order ? order : 'desc';
  
      if(USE_DUMMY_DATA) {
        // let query = '';
        // if(action && action.payload) {
        //     query = action.payload.query;
        // }

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
      
        state.isLoading = false;
        state.hasNextPage = hasNextPage;
        state.query = query;
        state.data = data;

        // return update(state, {
        //     isLoading: { $set: false },
        //     hasNextPage: { $set: hasNextPage },
        //     query: { $set: query },
        //     data: { $set: data }
        // });

      } else {

        let hasNextPage = false;
        let data = [];

        // const [ endpoint, method ] = POSTS_ENDPOINTS.LIST;
        // return {
        //     type: FETCH_POSTS,
        //     payload: {
        //         isLoading: true,
        //         url: endpoint,
        //         method: method,
        //         params: {
        //             page, pageSize, sort, order
        //         }
        //     }
        // }
    
        state.isLoading = false;
        state.hasNextPage = hasNextPage;
        state.query = query;
        state.data = data;
      }

    }
  }
})

// Action creators are generated for each case reducer function
export const { fetchPosts } = postsReducer.actions;

export default postsReducer.reducer;