// import { useEffect, useState } from 'react';
// import { func } from 'prop-types';
// import { Router } from 'express';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import { getPosts } from '../api';
import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings, UserProfile } from '../pages';

import { Loader, Navbar } from './';

function PrivateRoute() {
  const auth = useAuth();
  console.log(auth.user);

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

  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const auth = useAuth();
  console.log('auth', auth);

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

        <Route element={<PrivateRoute />}>
          <Route path="/settings" element={<Settings />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
