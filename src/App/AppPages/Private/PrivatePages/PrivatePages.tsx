import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Idle from './Idle';

const Component: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Idle />} />
    </Routes>
  );
};

export default Component;
