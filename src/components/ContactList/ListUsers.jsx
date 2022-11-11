import React from 'react';
import { PropTypes } from 'prop-types';
import css from './ListUsers.module.css';

const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    filteredContacts.length > 0 && (
      <ul className={css.item}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={css.listItem} key={id}>
              <span>{name} : </span>
              <span>{number}</span>
              <button className={css.buttonItem} onClick={() => onRemove(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
