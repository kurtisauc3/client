import { DARK_PURPLE, WHITE, YELLOW } from 'core/components/Colors';
import React, { FC } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Friends from './Friends';

const Container = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to bottom, ${DARK_PURPLE + 'CC'}, ${DARK_PURPLE});
`;

const SocialHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const SocialTitleContainer = styled.div`
  color: ${WHITE};
`;
const SocialButtonContainer = styled.div`
  svg {
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
`;
const LobbyRequestContainer = styled.div``;
const LobbyStatusContainer = styled.div``;
const FriendRequestContainer = styled.div`
  padding: 10px;
  color: ${YELLOW}!important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FriendRequestCountContainer = styled.div`
  position: relative;
  background-color: ${YELLOW}!important;
  border-radius: 4px;
  padding: 2px 6px 1px 9px;
  color: ${DARK_PURPLE}!important;
`;
const FriendStatusContainer = styled.div``;

const Component: FC = () => {
  return (
    <Container>
      <LobbyRequestContainer>
        <FormattedMessage id="lobbyRequest" />
      </LobbyRequestContainer>
      <LobbyStatusContainer>
        <FormattedMessage id="lobbyStatus" />
      </LobbyStatusContainer>
      <SocialHeaderContainer>
        <SocialTitleContainer>
          <FormattedMessage id="social" />
        </SocialTitleContainer>
        <SocialButtonContainer>
          <FaUserPlus />
        </SocialButtonContainer>
      </SocialHeaderContainer>
      <FriendRequestContainer>
        <FormattedMessage id="friendRequests" />
        <FriendRequestCountContainer>0</FriendRequestCountContainer>
      </FriendRequestContainer>
      <FriendStatusContainer>
        <Friends />
      </FriendStatusContainer>
    </Container>
  );
};

export default Component;
