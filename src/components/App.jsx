import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormUser from './FormUser/FormUser';
import ContactList from './ContactList/ListUsers';
import FilterUser from './Filter/FilterUser';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const nameCheck = name => {
    const normalizedName = name.toLowerCase();
    const checked = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (checked) return checked.name;
  };

  const addContact = (name, number) => {
    if (nameCheck(name)) return toast.error(`${name} is already is contacts`);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'antiquewhite',
      }}
    >
      <h1>Phonebook</h1>
      <FormUser onSubmit={addContact} />
      <h2>Contacts</h2>
      <div>
        <FilterUser value={filter} onChange={changeFilter} />
        <ContactList
          filteredContacts={getFilteredContacts()}
          onRemove={deleteContact}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
