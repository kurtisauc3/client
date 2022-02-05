import { selectShouldLogin } from 'core/redux/client';
import { useAppDispatch, useAppSelector } from 'core/redux/store';
import user from 'core/redux/user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePrivateUtils = () => {
  const dispatch = useAppDispatch();
  const shouldLogin = useAppSelector(selectShouldLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldLogin) {
      navigate('login');
    }
  }, [shouldLogin, navigate]);

  useEffect(() => {
    return () => {
      dispatch(user.actions.reset());
    };
  });
};

export default usePrivateUtils;
