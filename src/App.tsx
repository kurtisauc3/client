import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Authenticate from './Authenticate';
import Home from './Home';
import IdleLayout from './IdleLayout';
import Play from './Play';
import PrivateLayout from './PrivateLayout';
import Profile from './Profile';
import PublicLayout from './PublicLayout';

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
            <Route path="play" element={<Play />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Component;
