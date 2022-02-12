import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Component: FC = () => {
  return (
    <div>
      <>idle layout</>
      <div>
        <NavLink to="idle">home</NavLink>
        <NavLink to="create-lobby">create lobby</NavLink>
        <NavLink to="user-state">user state</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Component;
