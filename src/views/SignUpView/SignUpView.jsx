import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReguisterUser } from '../../redux/auth/auth-operations';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import style from './SignUpView.module.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputRegisterChange = e => {
    if (e.target.attributes.id.value === 'formBasicName') {
      setName(e.target.value);
    } else if (e.target.attributes.id.value === 'formBasicEmail') {
      setEmail(e.target.value);
    } else if (e.target.attributes.id.value === 'formBasicPassword') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    dispatch(ReguisterUser(user));
    setName('');
    setEmail('');
    setPassword('');
    return user;
  };

  return (
    <div className={style.sign_up_container}>
      <Form>
        <FormGroup controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={style.sign_up_input}
            type="name"
            autoComplete="off"
            placeholder="Name"
            onChange={inputRegisterChange}
            value={name}
          />
        </FormGroup>
        <FormGroup controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={style.sign_up_input}
            type="email"
            autoComplete="off"
            placeholder="Enter email"
            onChange={inputRegisterChange}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FormGroup>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={style.sign_up_input}
            type="password"
            autoComplete="off"
            placeholder="Password"
            onChange={inputRegisterChange}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
  /*<form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        onChange={inputRegisterChange}
      />
      <label htmlFor="mail">Mail</label>
      <input
        type="text"
        id="mail"
        name="mail"
        autoComplete="off"
        onChange={inputRegisterChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        onChange={inputRegisterChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>*/
};

export default SignUp;
