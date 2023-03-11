import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftdiv}>
        <a href="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </a>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <a href="/">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="dp"
              className={styles.userDp}
            />
          </a>
          <span>Ayushmaan</span>
        </div>
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
