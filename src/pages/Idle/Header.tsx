import ActionButton from 'core/components/ActionButton';
import HighlightButton from 'core/components/HighlightButton';
import api from 'core/services/api';
import idle from 'core/services/idle';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import user from 'core/services/user';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
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
  const view = useAppSelector((state) => state.idle.view);
  const dispatch = useAppDispatch();
  const { goTo: goToIdlePage } = idle.actions;
  const { goTo: goToUserPage } = user.actions;
  const idleViews: Array<typeof view> = ['home', 'profile'];
  return (
    <Container>
      <ActionButton
        className={view === 'play' ? 'active' : ''}
        onClick={() => dispatch(goToIdlePage('play'))}
      >
        <FormattedMessage id="play"></FormattedMessage>
      </ActionButton>
      {idleViews.map((idleView) => (
        <HighlightButton
          key={idleView}
          type="button"
          onClick={() => dispatch(goToIdlePage(idleView))}
          className={idleView === view ? 'active' : ''}
        >
          <FormattedMessage id={idleView}></FormattedMessage>
        </HighlightButton>
      ))}
      <HighlightButton
        type="button"
        onClick={() => {
          api.playerState.logout((result) => {
            if ('data' in result) {
              dispatch(goToUserPage('auth'));
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
