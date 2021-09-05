import { current, createSlice } from '@reduxjs/toolkit';
import isArray from 'lodash/isArray';

import { transformToList, transformToDetails } from './../../transformations/posts';

const name = 'posts';

const defaultPayloadPosts = {
  sort: 'createDate',
  order: 'desc',
  query: undefined,
  hasNextPage: false,
  data: []
};

export const postsReducer = createSlice({
  name,
  initialState: {
    isLoading: false,
    hasNextPage: false,
    query: undefined,
    details: undefined,
    data: { 
      totalSize: 0,
      page: 0,
      pageSize: 0,
      result: []
    }
  },
  reducers: {
    setLoading: (state, action = { payload: false }) => {
      console.log('setLoading -> state', current(state))
      console.log({action})

      state.isLoading = true;
    },
    savePosts: (state, action = { payload: undefined}) => {
      console.log('savePosts -> state', current(state))
      console.log({action})

      let payload = action.payload;
      // set default payload
      if(!payload) {
        payload = defaultPayloadPosts;
      }
      console.log({payload})
      let {
          sort = 'createDate',
          order = 'desc',
          query = undefined,
          hasNextPage = false,
          data = []
      } = payload;

      console.log({data})

      if(data && isArray(data.result) && data.result.length > 0) {
        data.result = transformToList(data.result);
      }

      console.log({data})
  
      state.sort = sort;
      state.order = order;
      state.isLoading = false;
      state.hasNextPage = hasNextPage;
      state.query = query;
      state.data = data;

    },
    clearPosts: (state) => {
      console.log('clearPosts -> state', current(state))
      let {
          sort = 'createDate',
          order = 'desc',
          query = undefined,
          hasNextPage = false,
          data = []
      } = defaultPayloadPosts;
  
      state.sort = sort;
      state.order = order;
      state.isLoading = false;
      state.hasNextPage = hasNextPage;
      state.query = query;
      state.data = data;
      // reset also details
      state.details = undefined;
    },
    savePost: (state, action = { payload: undefined}) => {
      console.log('savePost -> state', current(state))
      console.log({action})
      let details = action.payload;

      console.log({details})

      if(details) {
        details = transformToDetails(details);
      }

      console.log({details})
  
      state.details = details;

    },
    clearPost: (state, action = { payload: undefined}) => {
      console.log('clearPost -> state', current(state))
      console.log({action})
  
      state.details = undefined;

    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading, 
                savePosts, clearPosts,
                savePost, clearPost
              } = postsReducer.actions;

export default postsReducer.reducer;