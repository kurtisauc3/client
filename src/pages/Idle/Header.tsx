import ActionButton from 'core/components/ActionButton';
import { DARK_PURPLE, WHITE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import api from 'core/services/api';
import auth from 'core/services/auth';
import idle from 'core/services/idle';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import user from 'core/services/user';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${DARK_PURPLE + 'EE'};
  button {
    padding: 0 24px;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    &.active,
    &:hover {
      background-image: linear-gradient(to top, ${WHITE + '33'}, ${WHITE + '00'});
    }
  }
`;

const Component: FC = () => {
  const view = useAppSelector((state) => state.idle.view);
  const dispatch = useAppDispatch();
  const { goTo } = idle.actions;
  const { goTo: goToAuthPage } = auth.actions;
  const { goTo: goToUserPage } = user.actions;
  const idleViews: Array<typeof view> = ['home', 'profile'];
  return (
    <Container>
      <ActionButton
        className={view === 'play' ? 'active' : ''}
        onClick={() => dispatch(goTo('play'))}
      >
        <FormattedMessage id="play"></FormattedMessage>
      </ActionButton>
      {idleViews.map((idleView) => (
        <button
          key={idleView}
          type="button"
          onClick={() => dispatch(goTo(idleView))}
          className={idleView === view ? 'active' : ''}
        >
          <FormattedMessage id={idleView}></FormattedMessage>
        </button>
      ))}
      <button
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
      </button>
    </Container>
  );
};

export default Component;
