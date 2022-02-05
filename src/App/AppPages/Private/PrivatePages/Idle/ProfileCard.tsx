import UserCard from 'core/components/UserCard';
import { useAppSelector } from 'core/redux/store';
import React, { FC } from 'react';

const Component: FC = () => {
  const { profile } = useAppSelector((state) => state.user);

  if (!profile) {
    return null;
  }

  return <UserCard userPresence={profile} />;
};

export default Component;
