import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Play from './Play';
import Profile from './Profile';

const Component: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="play/*" element={<Play />} />
      <Route path="profile/*" element={<Profile />} />
    </Routes>
  );
};

export default Component;
