import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../Redux/contactSlice';
import { getFilter } from 'Redux/filterSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const normalizedFilter = filtered.toLowerCase();

  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.label}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
