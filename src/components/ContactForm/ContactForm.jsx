import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selector';
import { addContact } from 'redux/contactSlice';

import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(selectorContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Name</span>
          <Input
            name="name"
            type="text"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter contact name"
          />
          <span>Number</span>
          <Input
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            placeholder="Number"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
