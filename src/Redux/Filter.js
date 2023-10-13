import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};
const filterContact = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
      prepare(filter) {
        return {
          payload: filter,
        };
      },
    },
  },
});

export const { setFilter } = filterContact.actions;
const filterReducer = filterContact.reducer;
export default filterReducer;
