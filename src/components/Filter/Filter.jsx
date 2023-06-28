import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/slices';

export default function Filter() {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={changeFilter}
        className={css.filterInput}
      />
    </label>
  );
}
