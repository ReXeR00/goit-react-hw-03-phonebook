import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li className={styles.item} key={contact.id}>
        {contact.name + ' : ' + contact.number}
        <button
          className={styles.button}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(contact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;