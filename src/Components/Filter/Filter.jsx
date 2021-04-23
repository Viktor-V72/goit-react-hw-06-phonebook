import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../Redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <span className={styles.text}>Find contacts by name</span>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.filter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
