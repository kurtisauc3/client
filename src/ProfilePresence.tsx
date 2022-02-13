import React, { FC } from 'react';
import { useAppSelector } from 'store';
import UserPresence from './UserPresence';

const Component: FC = () => {
  const profile = useAppSelector((state) => state.user.profile);
  return (
    <div>
      <>profile presence</>
      <div>{profile && <UserPresence userPresence={profile} />}</div>
    </div>
  );
};

export default Component;
