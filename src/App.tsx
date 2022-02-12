import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Authenticate from './Authenticate';
import CreateLobby from './CreateLobby';
import Home from './Home';
import IdleLayout from './IdleLayout';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import UserState from './UserState';

const Component: FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<PublicLayout />}>
          <Route path="authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route element={<IdleLayout />}>
            <Route path="" element={<Home />} />
            <Route path="create-lobby" element={<CreateLobby />} />
            <Route path="user-state" element={<UserState />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Component;
