import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Component: FC = () => {
  return (
    <>
      <div>public layout</div>
      <Outlet />
    </>
  );
};

export default Component;
