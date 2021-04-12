import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogInUser } from '../../redux/auth/auth-operations';

const LogInView = () => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const InputLogInChange = e => {
    if (e.target.attributes.id.value === 'mail') {
      setMail(e.target.value);
    } else if (e.target.attributes.id.value === 'password') {
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
    <form>
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
    </form>
  );
};

export default LogInView;
