import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../Redux/filterSlice';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
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
