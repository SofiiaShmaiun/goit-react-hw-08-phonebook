import React, { useEffect } from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Form />
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <div className={css.contactsSection}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.contactsList}>
          {filteredContacts !== undefined &&
            filteredContacts.map(contact => (
              <li key={contact.id} className={css.contactsListItem}>
                {'  '}
                {contact.name}
                {' — '}
                {contact.number}
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                  className={css.deleteContactButton}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
