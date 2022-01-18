import { TAN, WHITE } from 'core/components/Colors';
import api from 'core/services/api';
import network from 'core/services/network';
import { useAppDispatch } from 'core/services/store';
import { CustomSuccessCode } from 'core/types/enums';
import React, { FC, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;
const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  input {
    width: 320px;
    padding-left: 36px !important;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.8);
    border: 2px solid ${TAN};
  }
  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  input,
  button {
    background-image: linear-gradient(to top, ${WHITE + '11'}, ${WHITE + '00'});
    padding: 5px 10px;
  }
  button:hover {
    background-image: linear-gradient(to top, ${WHITE + '33'}, ${WHITE + '00'});
  }
`;

const Component: FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const { setNotify } = network.actions;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      api.script.runScript('sendFriendRequest', { username }, (result) => {
        if ('data' in result && result.data.success) {
          if ('friendRequests' in result.data.response) {
            dispatch(setNotify({ type: 'success', code: CustomSuccessCode.FriendRequestSent }));
            setUsername('');
          } else {
            dispatch(setNotify({ type: 'error', code: result.data.response.custom_error }));
          }
        }
      });
    },
    [username, setUsername, dispatch, setNotify]
  );

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
