import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactSlice';
import { getFilter, getContacts } from 'Redux/store';
import { Notify } from 'notiflix';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  if (filter.toLowerCase() && !filterContact.length) {
    Notify.warning('No contacts matching your request', {
      position: 'center-center',
    });
  }

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filterContact.map(({ id, name, number }) => (
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
