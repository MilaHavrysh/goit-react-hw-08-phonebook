//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import {
  FetchContacts,
  DeleteContact,
} from '../../redux/contacts/contacts-operations';
import React, { useEffect } from 'react';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const items = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(FetchContacts()), []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul className={styles.contactList}>
        {items.map(element => (
          <li key={element.id} className={styles.contact_list_item}>
            <p className={styles.contact_list_item_name}>{element.name}</p>
            <p className={styles.contact_list_item_number}>{element.number}</p>
            <button
              className={styles.contact_list_item_button}
              type="button"
              onClick={() => dispatch(DeleteContact(element.id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;




/*-------------------- Без useSelector и useDispatch-------------------------*/

/*ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  DeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getVisibleContacts(state),
  loading: getLoading(state),
});*/
/*const mapDispatchToProps = dispatch => {
  return {
    DeleteContact: id => dispatch(operations.DeleteContact(id)),
    FetchContacts: () => dispatch(operations.FetchContacts()),
  };
};*/
//export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
