/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');

const deleteContact = createAction('contacts/delete');

const filter = createAction('contacts/filter');

export default {
  addContact,
  deleteContact,
  filter,
};
// const addContact = data => ({
//   type: types.ADD,
//   payload: data,
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filter = value => ({
//   type: types.FILTER,
//   payload: value,
// });
