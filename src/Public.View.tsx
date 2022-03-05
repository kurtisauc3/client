import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { usePublic } from './Public.Utils';
import Splash from './Splash';
import Entry from './Entry';
import Login from './Login';
import ResetPassword from './ResetPassword';
import CreateAccount from './CreateAccount';

const Container = styled.div`
  flex: 1;
`;
const StateContainer = styled.div`
  width: 400px;
`;
const SplashContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }
`;

const Component: FC = () => {
  const { state } = usePublic();

  const StateView: React.FC = useMemo(() => {
    switch (state.view) {
      case 'entry':
        return Entry;
      case 'login':
        return Login;
      case 'createAccount':
        return CreateAccount;
      case 'resetPassword':
        return ResetPassword;
    }
  }, [state.view]);

  return (
    <Container>
      <StateContainer>
        <StateView />
      </StateContainer>
      <SplashContainer>
        <Splash />
      </SplashContainer>
    </Container>
  );
};

export default Component;
