import { WHITE } from 'core/components/Colors';
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
  button {
    padding: 0 24px;
    height: 100%;
    &:hover {
      color: ${WHITE};
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const Component: FC = () => {
  const view = useAppSelector((state) => state.idle.view);
  const dispatch = useAppDispatch();
  const { goTo } = idle.actions;
  const { goTo: goToAuthPage } = auth.actions;
  const { goTo: goToUserPage } = user.actions;
  const idleViews: Array<typeof view> = ['play', 'home', 'profile'];
  return (
    <Container>
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
