import useMountedState from 'hooks/useMountedState';
import React, { FC, useCallback, useEffect, useState } from 'react';
import api from 'services/api';
import { useAppDispatch } from 'store';
import { loadFriends, loadProfile } from 'store/user';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();
  const [status, setStatus] = useState<RTTStatus>();

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
      api.presence.registerListenersForProfiles([api.getProfileId()], false, (result) => {
        if ('data' in result && isMounted()) {
          dispatch(loadProfile());
        }
      });
      api.presence.registerListenersForFriends('all', false, (result) => {
        if ('data' in result && isMounted()) {
          dispatch(loadFriends());
        }
      });
    } else if (status === 'disconnected') {
      api.presence.stopListening();
    }
  }, [status, dispatch, isMounted]);

  useEffect(() => {
    connect();
    return () => {
      api.rttService.disableRTT();
    };
  });

  return (
    <>
      {status === 'disconnected' && (
        <div>
          <button type="button" onClick={connect}>
            connect
          </button>
        </div>
      )}
    </>
  );
};

export default Component;
