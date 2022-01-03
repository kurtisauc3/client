import { useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import styled from 'styled-components';
import Home from './Home';
import Play from './Play';
import Profile from './Profile';

const Container = styled.div`
  flex-grow: 1;
`;

const Component: FC = () => {
  const view = useAppSelector((state) => state.idle.view);

  const renderBody = (): React.ReactNode => {
    switch (view) {
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
