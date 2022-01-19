import { DARK_PURPLE } from 'core/components/Colors';
import React, { FC } from 'react';
import styled from 'styled-components';
import FriendListener from './FriendListener';
import FriendRequestCount from './FriendRequestCount';
import FriendRequestListener from './FriendRequestListener';
import Friends from './Friends';
import Header from './Header';
import LobbyRequest from './LobbyRequest';
import LobbyStatus from './LobbyStatus';

const Container = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to bottom, ${DARK_PURPLE + 'CC'}, ${DARK_PURPLE});
`;

const Component: FC = () => {
  return (
    <Container>
      <FriendListener />
      <FriendRequestListener />
      <LobbyRequest />
      <LobbyStatus />
      <Header />
      <FriendRequestCount />
      <Friends />
    </Container>
  );
};

export default Component;
