import { DARK_PURPLE } from 'core/components/Colors';
import React, { FC } from 'react';
import styled from 'styled-components';
import FriendRequests from './FriendRequests';
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
      <LobbyRequest />
      <LobbyStatus />
      <Header />
      <FriendRequests />
      <Friends />
    </Container>
  );
};

export default Component;
