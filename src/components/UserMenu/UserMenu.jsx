import { LogOutUser } from '../../redux/auth/auth-operations';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getEmail } from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
import { Button } from 'react-bootstrap';
import routes from '../../routes';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  return (
    <>
      <p className={styles.user_menu}>
        <span className={styles.user_menu_welcome}>Welcome</span>
        {`${email}`}
      </p>
      <Link
        className={styles.navigation_link}
        to={{ pathname: routes.login }}
      ></Link>
      <Link to={{ pathname: routes.home }}>
        <Button
          className={styles.user_menu_button}
          variant="primary"
          type="button"
          onClick={() => dispatch(LogOutUser())}
        >
        LOG OUT
      </Button>
      </Link>
    </>
  );
};

export default withRouter(UserMenu);
/*<Button
        className={styles.user_menu_button}
        variant="primary"
        type="button"
        onClick={() => dispatch(LogOutUser())}
      >
        LOG OUT
      </Button>*/
