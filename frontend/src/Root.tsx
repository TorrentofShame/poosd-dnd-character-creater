import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = (): JSX.Element => {
  return (
    <div className="Root">
      <Outlet />
    </div>
  );
}

export default Root;
