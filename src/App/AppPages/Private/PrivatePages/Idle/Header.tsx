import ActionButton from 'core/components/ActionButton';
import HighlightButton from 'core/components/HighlightButton';
import api from 'core/services/api';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    border: none;
    padding: 0 24px;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Component: FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ActionButton onClick={() => navigate('play')}>
        <FormattedMessage id="play"></FormattedMessage>
      </ActionButton>
      <HighlightButton type="button" onClick={() => navigate('/')}>
        <FormattedMessage id="home"></FormattedMessage>
      </HighlightButton>
      <HighlightButton type="button" onClick={() => navigate('profile')}>
        <FormattedMessage id="profile"></FormattedMessage>
      </HighlightButton>
      <HighlightButton
        type="button"
        onClick={() => {
          api.playerState.logout((result) => {
            if ('data' in result) {
              navigate('/login');
            }
          });
        }}
      >
        <FormattedMessage id="logout"></FormattedMessage>
      </HighlightButton>
    </Container>
  );
};

export default Component;
