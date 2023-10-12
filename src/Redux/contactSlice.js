import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Initial state of contacts
const contactInitialState = {
  items: [
    { id: 'id-1', name: 'Andrew Marchel', number: '459-12-56' },
    { id: 'id-2', name: 'Emanuel Francois', number: '443-89-12' },
    { id: 'id-3', name: 'Adonis Silviu', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// Slice definition
const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Persisting data
const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

// Reducer
export const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

export const getContacts = state => state.contacts.items;

const contactsReducer = contactSlice.reducer;

export default contactsReducer;
