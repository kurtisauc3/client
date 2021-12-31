import Loading from 'core/components/Loading';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch } from 'core/services/store';
import user from 'core/services/user';
import React, { FC, useEffect } from 'react';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo: goToAuthPage } = auth.actions;
  const { goTo: goToUserPage } = user.actions;

  useEffect(() => {
    api.identity.getIdentities((result) => {
      if ('data' in result) {
        if (result.data.identities.Universal) {
          dispatch(goToUserPage('idle'));
        } else {
          dispatch(goToAuthPage('createUsername'));
        }
      }
    });
  }, []);

  return <Loading />;
};

export default Component;
