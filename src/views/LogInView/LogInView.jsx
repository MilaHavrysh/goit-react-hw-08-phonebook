import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogInUser } from '../../redux/auth/auth-operations';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import style from './LogInView.module.css';

const LogInView = () => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const InputLogInChange = e => {
    if (e.target.attributes.id.value === 'formBasicEmail') {
      setMail(e.target.value);
    } else if (e.target.attributes.id.value === 'formBasicPassword') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: mail,
      password: password,
    };
    console.log(user);
    dispatch(LogInUser(user));
  };

  return (
    <div className={style.log_in_container}>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={style.log_in_input}
            type="email"
            placeholder="Enter email"
            onChange={InputLogInChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FormGroup>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={style.log_in_input}
            type="password"
            placeholder="Password"
            onChange={InputLogInChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LogInView;

/*<form>
      <label htmlFor="mail">Email</label>
      <input
        type="text"
        id="mail"
        name="mail"
        autoComplete="off"
        onChange={InputLogInChange}
      />
      <label htmlFor="password">Name</label>
      <input
        type="text"
        id="password"
        name="password"
        autoComplete="off"
        onChange={InputLogInChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Log In
      </button>
    </form>*/
