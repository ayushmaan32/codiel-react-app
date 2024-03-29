import { Post, FriendsList, CreatePost, Loader } from '../components/index';
import styles from '../styles/home.module.css';
import { useAuth, usePosts } from '../hooks';

const Home = () => {
  const auth = useAuth();
  const posts = usePosts();
  console.log(posts.data);

  if (posts.loading) {
    return <Loader />;
  }

  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        <CreatePost />
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`} />
        ))}
        {/* <Post /> */}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

export default Home;
