import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducers from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
