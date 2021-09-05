import { createSlice } from '@reduxjs/toolkit';

const name = 'loader';

export const loaderReducer = createSlice({
  name,
  initialState: {
    isLoading: false
  },
  reducers: {
    enableLoading: (state) => {
      state.isLoading = true;
    },
    disableLoading: (state) => {
      state.isLoading = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { enableLoading, disableLoading } = loaderReducer.actions;

export default loaderReducer.reducer;