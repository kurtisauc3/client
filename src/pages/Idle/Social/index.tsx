import { DARK_PURPLE } from 'core/components/Colors';
import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import idle from 'core/services/idle';
import { useAppDispatch } from 'core/services/store';
import React, { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import FriendRequestCount from './FriendRequestCount';
import Friends from './Friends';
import Header from './Header';
import LobbyRequest from './LobbyRequest';
import LobbyStatus from './LobbyStatus';

const Container = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to bottom, ${DARK_PURPLE + 'CC'}, ${DARK_PURPLE});
`;

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMountedState();
  const { setFriends, setFriendRequests } = idle.actions;
  const [events, setEvents] = useState<Array<FriendRequestEvent>>([]);
  const [rttEvents, setRttEvents] = useState<Array<FriendRequestEvent>>([]);
  const allEvents = useMemo(() => [...new Set([...events, ...rttEvents])], [events, rttEvents]);

  useEffect(() => {
    dispatch(setFriendRequests(allEvents));
  }, [allEvents, dispatch, setFriendRequests]);

  useEffect(() => {
    api.event.getEvents((result) => {
      if ('data' in result && isMounted()) {
        setEvents(result.data.incoming_events.filter((ev) => ev.eventType === 'friendRequest'));
      }
    });
    api.presence.registerListenersForFriends('all', false, (result) => {
      if ('data' in result && isMounted()) {
        dispatch(setFriends(result.data.presence));
      }
    });
    api.rttService.registerRTTEventCallback(({ data }) => {
      if (data.eventType === 'friendRequest' && isMounted()) {
        setRttEvents((rttEvents) => [...rttEvents, data]);
      }
    });
    return () => {
      api.presence.stopListening();
      api.rttService.deregisterRTTEventCallback();
    };
  }, [isMounted, dispatch, setFriends]);

  return (
    <Container>
      <LobbyRequest />
      <LobbyStatus />
      <Header />
      <FriendRequestCount />
      <Friends />
    </Container>
  );
};

export default Component;
