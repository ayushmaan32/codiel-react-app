import { useState } from 'react';
import styles from '../styles/home.module.css';
import { addPost } from '../api';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);

  const handleAddPostClick = async () => {
    setAddingPost(true);
    const response = await addPost(post);

    if (response.success) {
      setPost('');
      toast.success('Post created Successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    setAddingPost(false);
  };

  return (
    <div className={styles.createPost}>
      <textarea
        className={styles.addPost}
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <div>
        <button
          className={styles.addPostBtn}
          onClick={handleAddPostClick}
          disabled={addingPost}
        >
          {addingPost ? 'Adding post...' : 'Add post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
