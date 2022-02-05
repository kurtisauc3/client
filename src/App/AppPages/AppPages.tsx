import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Private from './Private';

const Component: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Private />} />
      <Route path="login/*" element={<Login />} />
    </Routes>
  );
};

export default Component;
