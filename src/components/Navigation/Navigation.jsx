import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import { LogOutUser } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const dispatch = useDispatch();
  const Auth = useSelector(getIsAuth);
  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: routes.home }}>HOME</Link>
        </li>
        {!Auth && (
          <>
            <li>
              <Link to={{ pathname: routes.register }}>SIGN UP</Link>
            </li>
            <li>
              <Link to={{ pathname: routes.login }}>LOG IN</Link>
            </li>
          </>
        )}
        {Auth && (
          <li>
            <Link to={{ pathname: routes.contacts }}>CONTACTS</Link>
          </li>
        )}
      </ul>
      {Auth && (
        <>
          <p>WELCOME</p>
          <button type="button" onClick={() => dispatch(LogOutUser())}>
            LOG OUT
          </button>
        </>
      )}
    </nav>
  );
};

export default withRouter(Navigation);
