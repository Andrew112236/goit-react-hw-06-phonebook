import { createSlice, nanoid } from '@reduxjs/toolkit';

// initial state
const contactInitialState = {
  items: [
    { id: nanoid(7), name: 'Andrew Marchel', number: '459-12-56' },
    { id: nanoid(7), name: 'Emanuel Francois', number: '443-89-12' },
    { id: nanoid(7), name: 'Adonis Silviu', number: '645-17-79' },
    { id: nanoid(7), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

//Slice creator for addContact and deleteContact
const contactSlice = createSlice({
  name: 'phoneBookMark',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(7),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactSliceReducer = contactSlice.reducer;
