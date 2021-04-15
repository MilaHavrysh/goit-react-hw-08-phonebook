import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
//import { LogOutUser } from '../../redux/auth/auth-operations';
//import { useDispatch } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  //const dispatch = useDispatch();
  const Auth = useSelector(getIsAuth);
  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_list_item}>
            <Link
              className={styles.navigation_link}
              to={{ pathname: routes.home }}
            >
              HOME
            </Link>
          </li>
          {Auth && (
            <>
              <li className={styles.navigation_contacts}>
                <Link
                  className={styles.navigation_link}
                  to={{ pathname: routes.contacts }}
                >
                  CONTACTS
                </Link>
              </li>
              <UserMenu />
            </>
          )}
          {!Auth && (
            <>
              <li className={styles.navigation_sign_up}>
                <Link
                  className={styles.navigation_link}
                  to={{ pathname: routes.register }}
                >
                  SIGN UP
                </Link>
              </li>
              <li className={styles.navigation_list_item}>
                <Link
                  className={styles.navigation_link}
                  to={{ pathname: routes.login }}
                >
                  LOG IN
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navigation);
