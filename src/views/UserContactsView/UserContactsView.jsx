import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import styles from './UserContactsView.module.css';

const UserContactsView = () => {
  return (
    <>
      <h1 className={styles.contacts_view_main_title}>phonebook</h1>
      <ContactForm />
      <h2 className={styles.contacts_view_contacts_title}>Contacts</h2>
      <h2 className={styles.contacts_view_filter_title}>
        find contacts by name
      </h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default UserContactsView;
