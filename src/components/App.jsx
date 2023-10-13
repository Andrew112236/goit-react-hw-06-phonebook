import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { getContacts } from 'Redux/contactSlice';
import { getFilter } from 'Redux/filterSlice';

const App = () => {
  const contacts = useSelector(state => getContacts(state.contacts));
  const filtered = useSelector(state => getFilter(state.filter));

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default App;
