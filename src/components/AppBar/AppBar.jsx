import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';
//import UserMenu from '../UserMenu/UserMenu';
//import { getIsAuth } from '../../redux/auth/auth-selectors';
//import { useSelector } from 'react-redux';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
