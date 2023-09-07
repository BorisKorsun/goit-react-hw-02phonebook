import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from './Phonebook/Contacts/';

class App extends Component {
  state = {
    contacts: [
      { name: 'Garry', id: 1, number: '+380688775028' },
      { name: 'Simpson', id: 2, number: '+3801223649' },
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
          <Contacts filter={filter} onFilterChange={this.onInputChange} contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}

export default App;
