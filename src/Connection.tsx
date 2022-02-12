import useMountedState from 'hooks/useMountedState';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';
import { useAppDispatch } from 'store';
import { loadFriends, loadProfile } from 'store/user';

const Component: FC = ({ children }) => {
  const [status, setStatus] = useState<RTTStatus>('connecting');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();

  useEffect(() => {
    api.rttService.enableRTT(
      (result) => {
        if ('data' in result && isMounted()) {
          setStatus('connected');
          dispatch(loadProfile());
          dispatch(loadFriends());
          api.rttService.registerRTTPresenceCallback((result) => {
            // make this better...
            if (result.data.from.id === api.getProfileId()) {
              dispatch(loadProfile());
            } else {
              dispatch(loadFriends());
            }
          });
          api.presence.registerListenersForProfiles([api.getProfileId()], true);
          api.presence.registerListenersForFriends('all', true);
        }
      },
      () => {
        if (isMounted()) {
          api.rttService.deregisterAllRTTCallbacks();
          api.resetCommunication();
          navigate('/authenticate');
        }
      }
    );
  });

  return (
    <div>
      <>{status}</>
      {status === 'connected' && children}
    </div>
  );
};

export default Component;
