import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/auth';

const Contacts = lazy(() => import('../components/Contacts/Contacts'));
const Login = lazy(() => import('../components/Login/Login'));
const Register = lazy(() => import('../components/Register/Register'));
const Home = lazy(() => import('./Home/Home'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
