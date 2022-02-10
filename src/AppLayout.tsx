import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import Notify from './Notify';

const Component: FC = () => {
  return (
    <div>
      <>app layout</>
      <Loading />
      <Notify />
      <Outlet />
    </div>
  );
};

export default Component;
