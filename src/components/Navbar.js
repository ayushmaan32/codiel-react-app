import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const auth = useAuth();
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454."
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/settings">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUAB_Hbdz5YjruXOXnXEOH5HlUE1mSupuT8hVfRd0gA&s"
                alt=""
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name}</span>
          </div>
        )}

        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li>
                  <button onClick={auth.logout}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log in</Link>
                </li>

                <li>
                  <Link to="/signup">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
