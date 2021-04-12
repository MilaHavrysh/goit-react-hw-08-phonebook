//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { Submit } from '../../redux/contacts/contacts-operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [validName, setValidName] = useState(false);
  const [validNum, setValidNum] = useState(false);
  const dispatch = useDispatch();

  const addContactName = e => {
    const newName = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    if (name && number !== '' && validName && validNum) {
      dispatch(Submit(newName));
      setName('');
      setNumber('');
    }
  };

  const inputChange = e => {
    if (e.target.attributes.id.nodeValue === 'name') {
      setName(e.target.value);
      setValidName(e.target.validity.valid);
    } else if (e.target.attributes.id.nodeValue === 'number') {
      setNumber(e.target.value);
      setValidNum(e.target.validity.valid);
    }
  };
  return (
    <form className={styles.contact_form}>
      <label htmlFor={name} className={styles.contact_form_input_label}>
        name
      </label>
      <input
        className={styles.contact_form_input}
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={inputChange}
        value={name}
        placeholder=" "
      />

      <label htmlFor={number} className={styles.contact_form_input_label}>
        number
      </label>
      <input
        className={styles.contact_form_input}
        type="tel"
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        id="number"
        autoComplete="off"
        onChange={inputChange}
        value={number}
        placeholder=" "
      />

      <button
        className={styles.contact_form_button}
        type="button"
        onClick={addContactName}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

/*-------------------- Без useSelector и useDispatch-------------------------*/
/*
ContactForm.propTypes = {
  Submit: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    Submit: id => dispatch(operations.Submit(id)),
  };
};
export default connect(null, mapDispatchToProps)(ContactForm);*/
