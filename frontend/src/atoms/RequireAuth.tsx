import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}: {children: JSX.Element}): JSX.Element => {
  const auth = true;
  const loc = useLocation();

  if (!auth)
    return <Navigate to="/login" state={{from: loc}} replace />;

  return children;
};

export default RequireAuth;
