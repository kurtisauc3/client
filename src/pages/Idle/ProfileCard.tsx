import Loading from 'core/components/Loading';
import UserCard from 'core/components/UserCard';
import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import React, { FC, useEffect, useState } from 'react';

const Component: FC = () => {
  const [userPresence, setUserPresence] = useState<UserPresence>();
  const isMounted = useMountedState();
  useEffect(() => {
    api.presence.registerListenersForProfiles([api.getProfileId()], true, (result) => {
      if ('data' in result && isMounted()) {
        setUserPresence(result.data.presence[0]);
      }
    });
    return () => {
      api.presence.stopListening();
    };
  }, [isMounted]);

  if (!userPresence) {
    return <Loading />;
  }

  return <UserCard userPresence={userPresence} />;
};

export default Component;
