import { useAppSelector } from 'core/redux/store';
import { selectFriendRequests } from 'core/redux/user';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import FriendRequest from './FriendRequest';
import { Container, Title } from './FriendRequests.styles';

const Component: FC = () => {
  const friendRequests = useAppSelector(selectFriendRequests);

  if (friendRequests === undefined) {
    return null;
  }

  return (
    <Container>
      <Title>
        <FormattedMessage id="friendRequests" /> ({friendRequests.length})
      </Title>
      {friendRequests.map((friendRequest, index) => (
        <FriendRequest key={index} friendRequest={friendRequest} />
      ))}
    </Container>
  );
};

export default Component;
