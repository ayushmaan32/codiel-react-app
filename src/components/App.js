import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getPosts } from '../api';
import { useAuth } from '../hookes';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';

function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const auth = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (auth.loading) {
    return <Loader />;
  }

  const Page404 = () => {
    return <h1>404</h1>;
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
