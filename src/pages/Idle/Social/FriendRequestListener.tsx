import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import idle from 'core/services/idle';
import { useAppDispatch } from 'core/services/store';
import { FC, useEffect } from 'react';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();
  const { setFriendRequests } = idle.actions;

  useEffect(() => {
    const loadEvents = () => {
      api.event.getEvents((result) => {
        if ('data' in result && isMounted()) {
          dispatch(
            setFriendRequests(
              result.data.incoming_events.filter((ev) => ev.eventType === 'friendRequest')
            )
          );
        }
      });
    };
    api.rttService.registerRTTEventCallback(({ data }) => {
      if (data.eventType === 'friendRequest' && isMounted()) {
        loadEvents();
      }
    });
    loadEvents();
    return () => {
      api.rttService.deregisterRTTEventCallback();
    };
  }, [isMounted, dispatch, setFriendRequests]);

  return null;
};

export default Component;
