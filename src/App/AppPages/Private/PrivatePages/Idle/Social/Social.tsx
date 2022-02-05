import Colors from 'core/components/Colors';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FriendRequestCount from './FriendRequestCount';
import Friends from './Friends';
import Header from './Header';
import LobbyRequest from './LobbyRequest';
import LobbyStatus from './LobbyStatus';
import Modal from './Modal';
import { SocialModalContext, TSocialModal } from './Social.utils';

const Container = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to bottom, ${Colors.DARK_PURPLE + 'CC'}, ${Colors.DARK_PURPLE});
`;

const Component: FC = () => {
  const [modal, setModal] = useState<TSocialModal>();

  return (
    <Container>
      <SocialModalContext.Provider value={{ modal, setModal }}>
        <Modal />
        <LobbyRequest />
        <LobbyStatus />
        <Header />
        <FriendRequestCount />
        <Friends />
      </SocialModalContext.Provider>
    </Container>
  );
};

export default Component;
