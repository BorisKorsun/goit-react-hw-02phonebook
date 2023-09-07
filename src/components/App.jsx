import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onInputChange = e => {
    const value = e.target.value;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = () => {
    const { name, number } = this.state;
    const newContact = { name, id: nanoid(), number };
    this.setState(prev => {
      return { contacts: [newContact, ...prev.contacts], name: '', number: '' };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <Section title="Phonebook">
          <Phonebook
            onSubmit={this.onSubmitForm}
            name={name}
            number={number}
            onChange={this.onInputChange}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onFilterChange={this.onInputChange} />
          <Contacts contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}

export default App;
