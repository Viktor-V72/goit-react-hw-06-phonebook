import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, action) => {
    if (state.find(contact => contact.name === action.payload.name)) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    } else {
      return [action.payload, ...state];
    }
  },
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [actions.filter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (state.find(contact => contact.name === payload.name)) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       } else {
//         return [payload, ...state];
//       }

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
