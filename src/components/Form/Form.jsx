import React from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  fetchContacts,
  patchContact,
} from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const test = contacts.map(item => item.name);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (test.includes(evt.currentTarget.name.value)) {
      contacts.map(item => {
        if (item.name === evt.currentTarget.name.value) {
          dispatch(
            patchContact({
              id: item.id,
              name: evt.currentTarget.name.value,
              number: evt.currentTarget.number.value,
            })
          );
        }
      });
    } else {
      dispatch(
        addContact({
          name: evt.currentTarget.name.value,
          number: evt.currentTarget.number.value,
        })
      );
    }
    dispatch(fetchContacts());

    evt.currentTarget.reset();
  };

  return (
    <div className={css.formSection}>
      <h1 className={css.formTitle}>Phonebook</h1>{' '}
      <form onSubmit={handleSubmit} className={css.inputForm}>
        <label className={css.inputNameLabel}>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Enter contact"
            // onChange={handleChange}
            // value={name}
            className={css.inputName}
          />
        </label>
        <label className={css.inputNumberLabel}>
          Number
          <input
            type="tel"
            name="number"
            required
            // onChange={handleChange}
            // value={number}
            placeholder="Enter number"
            className={css.inputNumber}
          />
        </label>
        <button type="submit" className={css.submitFormButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}
