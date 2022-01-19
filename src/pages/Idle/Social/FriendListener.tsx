import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import idle from 'core/services/idle';
import { useAppDispatch } from 'core/services/store';
import { FC, useEffect } from 'react';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();
  const { setFriends } = idle.actions;

  useEffect(() => {
    api.presence.registerListenersForFriends('all', false, (result) => {
      if ('data' in result && isMounted()) {
        dispatch(setFriends(result.data.presence));
      }
    });
    return () => {
      api.presence.stopListening();
    };
  }, [isMounted, dispatch, setFriends]);

  return null;
};

export default Component;
