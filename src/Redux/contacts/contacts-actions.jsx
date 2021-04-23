/* eslint-disable import/no-anonymous-default-export */
import types from './contacts-types';

const addContact = data => ({
  type: types.ADD,
  payload: data,
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

export default {
  addContact,
  deleteContact,
  filter,
};
