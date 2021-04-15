import icon from './icon-phone.png';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.home_page}>
      <h1 className={style.home_page_title}>PHONEBOOK!</h1>
      <img src={icon} alt="icon-phone" />
      <p className={style.home_page_hello}>HELLO, FRIENDS!</p>
    </div>
  );
};

export default HomePage;
