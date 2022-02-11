import { FC, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'store';
import user from 'store/user';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const reset = useCallback(() => dispatch(user.actions.reset()), [dispatch]);

  useEffect(() => {
    reset();
  });

  return (
    <div>
      <>public layout</>
      <Outlet />
    </div>
  );
};

export default Component;
