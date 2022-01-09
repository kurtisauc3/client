import Nav from 'core/components/Nav';
import UserCard from 'core/components/UserCard';
import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import React, { FC, useEffect, useState } from 'react';

const Component: FC = () => {
  const [profile, setProfile] = useState<UserPresence>();
  const isMounted = useMountedState();
  useEffect(() => {
    api.presence.registerListenersForProfiles([api.getProfileId()], true, (result) => {
      if ('data' in result && isMounted()) {
        setProfile(result.data.presence[0]);
      }
    });
    return () => {
      api.presence.stopListening();
    };
  }, [isMounted]);

  return (
    <Nav>
      <UserCard userPresence={profile} />
    </Nav>
  );
};

export default Component;
