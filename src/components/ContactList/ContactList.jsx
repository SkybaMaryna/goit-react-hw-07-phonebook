import { Contact } from 'components/Contact/Contact';
import { StyledContactList, StyledContactItem } from './ContactList.styled';
import { StyledButton } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const applyFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <StyledContactList>
      {applyFilters().map(({ name, phone, id }) => (
        <StyledContactItem key={id}>
          <Contact name={name} number={phone} />
          <StyledButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </StyledButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};
