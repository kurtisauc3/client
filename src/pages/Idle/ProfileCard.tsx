import UserCard from 'core/components/UserCard';
import api from 'core/services/api';
import React, { FC, useEffect, useState } from 'react';

const Component: FC = () => {
  const [profile, setProfile] = useState<UserPresence>();
  useEffect(() => {
    let unmounting = false;
    api.presence.registerListenersForProfiles([api.getProfileId()], true, (result) => {
      if ('data' in result && !unmounting) {
        setProfile(result.data.presence[0]);
      }
    });
    return () => {
      unmounting = true;
      api.presence.stopListening();
    };
  }, []);

  return <UserCard userPresence={profile} />;
};

export default Component;
