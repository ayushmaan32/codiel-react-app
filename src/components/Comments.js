import PropTypes from 'prop-types';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toggleLike } from '../api';

import styles from '../styles/home.module.css';
const Comments = ({ comment }) => {
  const handlePostLikeClick = async () => {
    const response = await toggleLike(comment._id, 'Post');
    if (response.success) {
      if (response.data.deleted) {
        toast.success('Like reomove successfully!', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        toast.success('Like created successfully', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    } else {
      toast.error(response.message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div className={styles.postCommentsItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>{comment.user.name}</span>
        <span className={styles.postCommentTime}>{comment.createdAt}</span>

        <div className={styles.postLike}>
          <button onClick={handlePostLikeClick}>
            <img
              src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
              alt="likes-icon"
            />
          </button>
          <span className={styles.postCommentLikes}>
            {comment.likes.length}
          </span>
        </div>
      </div>

      <div className={styles.postCommentContent}>{comment.content}</div>

      <ToastContainer />
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
export default Comments;
