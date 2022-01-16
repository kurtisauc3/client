import HighlightButton from 'core/components/HighlightButton';
import UserCard from 'core/components/UserCard';
import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const FriendCardContainer = styled(HighlightButton)`
  height: 50px;
  text-align: left;
  width: 100%;
`;

const Component: FC = () => {
  const [friends, setFriends] = useState<UserPresence[]>();
  const isMounted = useMountedState();
  useEffect(() => {
    api.presence.registerListenersForFriends('all', false, (result) => {
      if ('data' in result && isMounted()) {
        setFriends(result.data.presence);
      }
    });
    return () => {
      api.presence.stopListening();
    };
  }, [isMounted]);

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
