import { useState } from 'react';
import styles from '../../components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function ContactForm() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      window.alert(`${name} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name: name,
        number,
        id: nanoid(),
      })
    );

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Phonebook</h1>
      <label className={styles.label}>
        Name:
        <input
          className={styles.name}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
