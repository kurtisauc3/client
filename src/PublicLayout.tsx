import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'store';
import user from 'store/user';

const Component: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(user.actions.reset());
  });

  return (
    <div>
      <>public layout</>
      <Outlet />
    </div>
  );
};

export default Component;
