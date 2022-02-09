import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Authenticate from './Authenticate';
import Home from './Home';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const Component: FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<PublicLayout />}>
          <Route path="authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Component;
