import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import CreateAccount from './CreateAccount';
import Home from './Home';
import Login from './Login';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const Component: FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Component;
