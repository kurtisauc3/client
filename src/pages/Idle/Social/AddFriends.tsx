import { TAN, WHITE } from 'core/components/Colors';
import React, { FC, useState } from 'react';
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
  }
  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  input,
  button {
    border: 2px solid ${TAN};
    background-image: linear-gradient(to top, ${WHITE + '11'}, ${WHITE + '00'});
    padding: 5px 10px;
  }
  button:hover {
    background-image: linear-gradient(to top, ${WHITE + '33'}, ${WHITE + '00'});
  }
`;

const Component: FC = () => {
  const [username, setUsername] = useState('');

  return (
    <Container>
      <Title>
        <FormattedMessage id="addFriends" />
      </Title>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FaSearch />
        <input
          required
          autoFocus
          value={username}
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <button type="submit" disabled={!!username.length}>
          <FormattedMessage id="addFriend" />
        </button>
      </FormContainer>
    </Container>
  );
};

export default Component;
