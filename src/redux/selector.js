import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.contacts.items;

export const selectorfilter = state => state.contacts.filter;

export const selectorContactsFilter = createSelector(
  [selectorContacts, selectorfilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectorContactsIsLoading = state =>
  state.contacts.contacts.isLoading;

export const selectorContactsError = state => state.contacts.contacts.error;
