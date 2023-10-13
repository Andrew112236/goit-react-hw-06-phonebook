import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import filterContact from '../../Redux/Filter';
import { getFilter } from 'Redux/store';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <div>
      <label className={styles.label}>
        Filter contacts by name:
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </div>
  );
}
