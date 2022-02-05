import useMountedState from 'core/hooks/useMountedState';
import { useAppDispatch } from 'core/redux/store';
import { loadEvents, loadFriends, loadProfile } from 'core/redux/user';
import api from 'core/services/api';
import { useCallback, useEffect, useState } from 'react';

const useConnectingUtils = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();
  const [status, setStatus] = useState<RTTStatus>('loading');

  const connect = useCallback(() => {
    if (status !== 'connected') {
      api.rttService.enableRTT(
        (result) => {
          if ('data' in result && isMounted()) {
            setStatus('connected');
          }
        },
        () => {
          if (isMounted()) {
            setStatus('disconnected');
          }
        }
      );
    }
  }, [isMounted, status]);

  useEffect(() => {
    if (status === 'connected') {
      api.rttService.registerRTTEventCallback((result) => {
        if ('data' in result && isMounted()) {
          console.log('registerRTTEventCallback', result);
          dispatch(loadEvents());
        }
      });
      api.presence.registerListenersForProfiles([api.getProfileId()], false, (result) => {
        if ('data' in result && isMounted()) {
          console.log('registerListenersForProfiles', result);
          dispatch(loadProfile());
        }
      });
      api.presence.registerListenersForFriends('all', false, (result) => {
        if ('data' in result && isMounted()) {
          console.log('registerListenersForFriends', result);
          dispatch(loadFriends());
        }
      });
    } else if (status === 'disconnected') {
      console.log('deregisterAllRTTCallbacks');
      api.rttService.deregisterAllRTTCallbacks();
      api.presence.stopListening((result) => {
        if ('data' in result && isMounted()) {
          console.log('stopListening', result);
        }
      });
    }
  }, [status, dispatch, isMounted]);

  useEffect(() => {
    connect();
    return () => {
      api.rttService.disableRTT();
    };
  });

  return { status, connect };
};

export default useConnectingUtils;
