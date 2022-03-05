import HeaderContainer from 'components/HeaderContainer';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import Home from './Home';
import { useIdle } from './Idle.Utils';
import Nav from './Nav';
import Play from './Play';
import Profile from './Profile';

const Container = styled.div`
  flex-direction: column;
  flex: 1;
`;
const StateContainer = styled.div`
  flex: 1;
`;

const Component: FC = () => {
  const { state } = useIdle();

  const StateView: React.FC = useMemo(() => {
    switch (state.view) {
      case 'home':
        return Home;
      case 'play':
        return Play;
      case 'profile':
        return Profile;
    }
  }, [state.view]);
  return (
    <Container>
      <HeaderContainer>
        <Nav />
      </HeaderContainer>
      <StateContainer>
        <StateView />
      </StateContainer>
    </Container>
  );
};

export default Component;
