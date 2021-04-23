import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.contact_list}>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem name={name} number={number} key={id} id={id} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

// const normalizedFilter = this.state.filter.toLowerCase();

// const visibleContacts = this.state.contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter),
// );

const mapStateToProps = state => {
  const { filter, items } = state.contacts;

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
