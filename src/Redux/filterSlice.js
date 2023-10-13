import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
const filterReducer = filterSlice.reducer;
export default filterReducer;
