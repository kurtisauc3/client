import { IdleContext } from 'core/providers/Idle';
import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import Home from './Home';
import Play from './Play';
import Profile from './Profile';

const Container = styled.div``;

const Component: FC = () => {
  const { idleState } = useContext(IdleContext);

  const renderBody = (): React.ReactNode => {
    switch (idleState) {
      case 'play':
        return <Play />;
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
    }
  };

  return <Container>{renderBody()}</Container>;
};

export default Component;
