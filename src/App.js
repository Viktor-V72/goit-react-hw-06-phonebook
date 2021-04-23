import { Component } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import './styles.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
