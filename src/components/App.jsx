import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
