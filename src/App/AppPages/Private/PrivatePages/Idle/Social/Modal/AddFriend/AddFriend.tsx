import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { Container, FormContainer, Title } from './AddFriend.styles';
import useAddFriendUtils from './AddFriend.utils';

const Component: FC = () => {
  const { username, setUsername, handleSubmit } = useAddFriendUtils();

  return (
    <Container>
      <Title>
        <FormattedMessage id="addFriends" />
      </Title>
      <FormContainer id="addFriendsForm" onSubmit={handleSubmit}>
        <FaSearch />
        <input
          required
          autoFocus
          value={username}
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <button type="submit">
          <FormattedMessage id="addFriend" />
        </button>
      </FormContainer>
    </Container>
  );
};

export default Component;
