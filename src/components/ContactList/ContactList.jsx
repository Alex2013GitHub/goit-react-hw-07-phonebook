import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactSlice';

import { List, DeleteButton, ListItem } from './ContactList.styled';
import { useEffect } from 'react';
import {
  selectorContactsError,
  selectorContactsFilter,
  selectorContactsIsLoading,
} from 'redux/selector';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorContactsIsLoading);
  const error = useSelector(selectorContactsError);
  const filteredContacts = useSelector(selectorContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <List>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <ListItem key={contact.id}>
              {contact.name}: {contact.phone}
              <DeleteButton onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </DeleteButton>
            </ListItem>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </List>
      {isLoading && <Loader />}
      {error && <p>Oppsss Erorr</p>}
    </>
  );
};

export default ContactList;
