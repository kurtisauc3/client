import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import Notify from './Notify';

const Component: FC = () => {
  return (
    <>
      <div>app layout</div>
      <Loading />
      <Notify />
      <Outlet />
    </>
  );
};

export default Component;
