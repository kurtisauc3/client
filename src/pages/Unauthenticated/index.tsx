import React, { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import cover from '../../assets/images/cover.jpeg';
import logo from '../../assets/images/logo.png';
import api from '../../core/services/brainCloudClient';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import Login from './Login';

type TUnauthenticated = 'login' | 'createAccount' | 'forgotPassword';

const LOGIN_WIDTH = '400px';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
`;
const LoginContainer = styled.div`
  position: relative;
  width: ${LOGIN_WIDTH};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CoverContainer = styled.div`
  flex-grow: 1;
  img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
`;
const LogoContainer = styled.div`
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;

const LinkContainer = styled.div`
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const VersionContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  opacity: 0.5;
`;

const Component: FC = () => {
  const [state, setState] = useState<TUnauthenticated>('login');
  const version = api.getAppVersion();
  const states: TUnauthenticated[] = ['login', 'createAccount', 'forgotPassword'];
  const renderForm = () => {
    switch (state) {
      case 'login':
        return <Login />;
      case 'createAccount':
        return <CreateAccount />;
      case 'forgotPassword':
        return <ForgotPassword />;
    }
  };
  const renderLinks = () =>
    states
      .filter((stateKey) => stateKey !== state)
      .map((stateKey) => (
        <LinkContainer key={stateKey} onClick={() => setState(stateKey)}>
          <FormattedMessage id={stateKey} />
        </LinkContainer>
      ));

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img alt="logo" src={logo} />
        </LogoContainer>
        {renderForm()}
        {renderLinks()}
        <VersionContainer>{version}</VersionContainer>
      </LoginContainer>
      <CoverContainer>
        <img alt="cover" src={cover} />
      </CoverContainer>
    </Container>
  );
};

export default Component;
