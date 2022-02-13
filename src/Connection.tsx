import useMountedState from 'hooks/useMountedState';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';
import { useAppDispatch } from 'store';
import { loadFriends, loadMessagesPage, loadProfile, loadUnreadMessages } from 'store/user';

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
          dispatch(loadUnreadMessages());
          api.rttService.registerRTTMessagingCallback((result) => {
            dispatch(loadMessagesPage(result.data.message.from.id));
          });
          api.rttService.registerRTTPresenceCallback(() => {
            // do this better
            dispatch(loadProfile());
            dispatch(loadFriends());
          });
          api.presence.registerListenersForFriends('all', true);
          api.presence.registerListenersForProfiles([api.getProfileId()], false);
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
