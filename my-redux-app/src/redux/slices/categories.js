import { current, createSlice } from '@reduxjs/toolkit';
import isArray from 'lodash/isArray';

import { transformToList } from './../../transformations/posts';

const name = 'categories';

export const categoriesReducer = createSlice({
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
    fetchCategories: (state, action = { payload: undefined}) => {
      console.log('fetchCategories -> state', current(state))
      console.log({action})
      let {
          sort = 'createDate',
          order = 'desc',
          query = undefined,
          hasNextPage = false,
          data = []
      } = action.payload;

      if(data && isArray(data.result) && data.result.length > 0) {
        data.result = transformToList(data.result);
      }
  
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
export const { fetchCategories } = categoriesReducer.actions;

export default categoriesReducer.reducer;