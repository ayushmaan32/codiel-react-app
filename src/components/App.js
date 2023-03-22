// import { useEffect, useState } from 'react';
// import { func } from 'prop-types';
// import { Router } from 'express';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { getPosts } from '../api';
import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings } from '../pages';

import { Loader, Navbar } from './';

function PrivateRoute() {
  const auth = useAuth();

  // <Routes>
  //   <Route
  //   // {...rest}
  //   // render={() => {
  //   //   if (auth.user) {
  //   //     return { children };
  //   //   }

  //   //   return <Navigate to="/*" />;
  //   // }}
  //   />
  // </Routes>

  return auth.user ? <Settings /> : <Navigate to="/login" />;
}

function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/settings" element={<PrivateRoute />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
