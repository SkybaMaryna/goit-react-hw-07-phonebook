import React from 'react';
import { StyledFilterName } from './Filter.styled';
import { StyledInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledFilterName>Find contacts by name</StyledFilterName>
      <StyledInput
        type="text"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
