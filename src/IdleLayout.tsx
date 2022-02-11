import { FC } from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import api from 'services/api';

const Component: FC = () => {
  const profileId = api.getProfileId();

  if (!profileId.length) {
    return <Navigate to="/authenticate" />;
  }

  return (
    <div>
      <>idle layout</>
      <div>
        <NavLink to="">home</NavLink>
        <NavLink to="play">play</NavLink>
        <NavLink to="profile">profile</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Component;
