import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import api from 'services/api';
import Connection from './Connection';
import Logout from './Logout';

const Component: FC = () => {
  const profileId = api.getProfileId();

  if (!profileId.length) {
    return <Navigate to="/authenticate" />;
  }

  return (
    <div>
      <>private layout</>
      <Connection />
      <Logout />
      <Outlet />
    </div>
  );
};

export default Component;
