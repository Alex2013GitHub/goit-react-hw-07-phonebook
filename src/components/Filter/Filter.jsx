import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';

import { selectorfilter } from 'redux/selector';
import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const filter = useSelector(selectorfilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Label>
      <p>Find contacts by name</p>
      <form>
        <Input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </form>
    </Label>
  );
};

export default Filter;
