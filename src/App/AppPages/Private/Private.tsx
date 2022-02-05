import api from 'core/services/api';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import Connecting from './Connecting';
import usePrivateUtils from './Private.utils';
import PrivatePages from './PrivatePages';

const Component: FC = () => {
  usePrivateUtils();
  const profileId = api.getProfileId();

  if (!profileId.length) {
    return <Navigate to="login" />;
  }

  return (
    <>
      <Connecting />
      <PrivatePages />
    </>
  );
};

export default Component;
