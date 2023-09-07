import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from './Phonebook/Contacts/';

class App extends Component {
  state = {
    contacts: [
      { name: 'Garry', id: 1 },
      { name: 'Simpson', id: 2 },
    ],
    name: '',
    number: '',
  };

  onInputChange = e => {
    const value = e.target.value;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = () => {
    const { name } = this.state;
    const newContact = { name, id: nanoid() };
    this.setState(prev => {
      return { contacts: [newContact, ...prev.contacts], name: '' };
    });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Phonebook
            onSubmit={this.onSubmitForm}
            value={name}
            onChange={this.onInputChange}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
