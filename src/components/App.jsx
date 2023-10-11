import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  // Initial state
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // Lifecycle methor to implement localstorage

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts) {
      this.setState({ contacts: JSON.parse(saveContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  // Name alert with filter and submit function

  handleSubmit = ({ name, number }) => {
    if (this.isContactNameDuplicate(name)) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }

    const newContact = { id: Date.now().toString(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  isContactNameDuplicate(name) {
    const lowercaseName = name.toLowerCase();

    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === lowercaseName
    );
  }

  // Delete function

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter)
    );

    return (
      <div>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
