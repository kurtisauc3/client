import HighlightButton from 'core/components/HighlightButton';
import UserCard from 'core/components/UserCard';
import { useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const FriendCardContainer = styled(HighlightButton)`
  height: 50px;
  text-align: left;
  width: 100%;
`;

const Component: FC = () => {
  const { friends } = useAppSelector((state) => state.idle);

  if (!friends) {
    return null;
  }
  return (
    <Container>
      {friends.map((userPresence, index) => (
        <FriendCardContainer>
          <UserCard key={index} userPresence={userPresence} />
        </FriendCardContainer>
      ))}
    </Container>
  );
};

export default Component;
