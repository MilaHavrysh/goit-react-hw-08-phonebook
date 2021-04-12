import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReguisterUser } from '../../redux/auth/auth-operations';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputRegisterChange = e => {
    if (e.target.attributes.id.value === 'name') {
      setName(e.target.value);
    } else if (e.target.attributes.id.value === 'mail') {
      setEmail(e.target.value);
    } else if (e.target.attributes.id.value === 'password') {
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
    return user;
  };

  return (
    <form>
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
    </form>
  );
};

export default SignUp;
