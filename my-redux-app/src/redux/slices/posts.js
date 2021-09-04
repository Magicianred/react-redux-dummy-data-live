import { current, createSlice } from '@reduxjs/toolkit';
import isArray from 'lodash/isArray';

import { transformToList } from './../../transformations/posts';

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
    setLoading: (state, action = { payload: false }) => {
      console.log('setLoading -> state', current(state))
      console.log({action})

      state.isLoading = true;
    },
    fetchPosts: (state, action = { payload: undefined}) => {
      console.log('fetchPosts -> state', current(state))
      console.log({action})
      let {
          sort = 'createDate',
          order = 'desc',
          query = undefined,
          hasNextPage = false,
          data = []
      } = action.payload;

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

    }
  }
})

// Action creators are generated for each case reducer function
export const { fetchPosts, setLoading } = postsReducer.actions;

export default postsReducer.reducer;