import React, { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selector';
import { addContact } from 'redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const contacts = useSelector(selectorContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddNewContact = formData => {
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${formData.name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        ...formData,
      };
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddNewContact({ name, number });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Name</span>
          <Input
            onChange={handleInputChange}
            value={name}
            name="name"
            type="text"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter contact name"
          />
          <span>Number</span>
          <Input
            onChange={handleInputChange}
            value={number}
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
