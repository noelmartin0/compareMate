// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, authenticated, ...rest }) {
  return authenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;