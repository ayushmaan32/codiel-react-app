import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/settings.module.css';
import { useAuth } from '../hookes';

const Settings = () => {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(auth.user?.name ? auth.user.name : '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savingForm, setSavingForm] = useState(false);

  const clearform = () => {
    setPassword('');
    setConfirmPassword('');
  };

  const updateProfile = async () => {
    console.log(auth.user._id, name, password, confirmPassword);
    setSavingForm(true);

    let error = false;
    if (!name || !password || !confirmPassword) {
      toast.error('Please fill all the fields ', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      error = true;
    }

    if (password !== confirmPassword) {
      toast.error('Make sure password and confirm password Matches', {
        position: toast.POSITION.BOTTOM_LEFT,
      });

      error = true;
    }

    if (error) {
      return setSavingForm(false);
    }

    const response = await auth.updateUser(
      auth.user._id,
      name,
      password,
      confirmPassword
    );
    console.log(response);

    if (response.success) {
      setEditMode(false);
      setSavingForm(false);
      clearform();

      return toast.success('User updated successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(response.message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
    setSavingForm(false);
  };

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{auth.user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div className={styles.fieldValue}>{auth.user?.name}</div>
        )}
      </div>

      {editMode && (
        <>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </>
      )}

      <div className={styles.btnGrp}>
        {editMode ? (
          <>
            <button
              className={`button ${styles.saveBtn}`}
              onClick={updateProfile}
            >
              {savingForm ? 'Saving profile...' : 'Save profile'}
            </button>
            <button
              className={`button ${styles.editBtn}`}
              onClick={() => setEditMode(false)}
            >
              Go back
            </button>
          </>
        ) : (
          <button
            className={`button ${styles.editBtn}`}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Settings;
