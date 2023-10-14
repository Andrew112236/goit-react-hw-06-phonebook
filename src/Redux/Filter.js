import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;
