import { WHITE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import { IdleContext } from 'core/providers/Idle';
import React, { FC, useContext } from 'react';
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
  const { idleState, setIdleState } = useContext(IdleContext);
  const states: Array<typeof idleState> = ['play', 'home', 'profile'];
  return (
    <Container>
      {states.map((state) => (
        <button
          key={state}
          type="button"
          onClick={() => setIdleState(state)}
          className={state === idleState ? 'active' : ''}
        >
          <FormattedMessage id={state}></FormattedMessage>
        </button>
      ))}
    </Container>
  );
};

export default Component;
