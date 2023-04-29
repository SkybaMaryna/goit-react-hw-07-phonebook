import { Contact } from 'components/Contact/Contact';
import { StyledContactList, StyledContactItem } from './ContactList.styled';
import { StyledButton } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const applyFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <StyledContactList>
      {applyFilters().map(({ name, number, id }) => (
        <StyledContactItem key={id}>
          <Contact name={name} number={number} />
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
