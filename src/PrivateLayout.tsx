import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import api from 'services/api';
import AddFriends from './AddFriends';
import Connection from './Connection';
import FriendsPresence from './FriendsPresence';
import ProfilePresence from './ProfilePresence';
import RemoveFriends from './RemoveFriends';

const Component: FC = () => {
  const profileId = api.getProfileId();

  if (!profileId.length) {
    return <Navigate to="/authenticate" />;
  }

  return (
    <div>
      <>private layout</>
      <Connection>
        <ProfilePresence />
        <AddFriends />
        <RemoveFriends />
        <FriendsPresence />
        <Outlet />
      </Connection>
    </div>
  );
};

export default Component;
