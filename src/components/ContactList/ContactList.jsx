import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts, selectorFilter } from 'redux/selector';
import { deleteContact } from 'redux/contactSlice';
import { List, DeleteButton, ListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(state => selectorFilter(state));

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getFilteredContacts().map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
