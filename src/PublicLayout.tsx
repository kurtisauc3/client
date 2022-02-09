import { FC, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from 'store';
import user from 'store/user';

const Component: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(user.actions.reset());
  });

  return (
    <>
      <div>public layout</div>
      <Link to="login">login</Link>
      <Link to="create-account">create account</Link>
      <Outlet />
    </>
  );
};

export default Component;
