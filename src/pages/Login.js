import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/login.module.css';
import { login } from '../api';

import { useAuth } from '../hookes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const auth = useAuth();
  console.log(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      toast.error('Error Notification !', {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      const response = await auth.login(email, password);

      if (response.success) {
        toast.success('Successfully logged In !', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.log(response);
        toast.error('invalid username password', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    }

    setLoggingIn(false);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button>{loggingIn ? 'Logging in...' : 'Log In'}</button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
