import api from 'core/services/api';
import network from 'core/services/network';
import { useAppDispatch } from 'core/services/store';
import user from 'core/services/user';
import { ReasonCode } from 'core/types/enums';
import { FC, useEffect } from 'react';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = user.actions;
  const { setNotify } = network.actions;

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      switch (reason_code) {
        case ReasonCode.UserSessionExpired:
          dispatch(goTo('auth'));
          break;
        default:
          dispatch(setNotify({ type: 'error', code: reason_code }));
          break;
      }
    });
  });

  return null;
};

export default Component;
