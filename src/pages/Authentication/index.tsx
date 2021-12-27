import cover from 'assets/images/cover.jpeg';
import logo from 'assets/images/logo.png';
import Loading from 'core/components/Loading';
import { AuthContext } from 'core/providers/Auth';
import api from 'core/services/brainCloudClient';
import React, { FC, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CreateAccount from './CreateAccount';
import EmailSent from './EmailSent';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import SetUserName from './SetUsername';

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
  const { state, goToCreateAccount, goToLogin, goToForgotPassword, logout } =
    useContext(AuthContext);
  const version = api.getAppVersion();

  const renderForm = () => {
    switch (state) {
      case 'login':
        return <Login />;
      case 'createAccount':
        return <CreateAccount />;
      case 'forgotPassword':
        return <ForgotPassword />;
      case 'emailSent':
        return <EmailSent />;
      case 'setUsername':
        return <SetUserName />;
      case 'authenticated':
        return <Loading />;
    }
  };
  const renderLinks = () => {
    switch (state) {
      case 'login':
        return (
          <>
            <LinkContainer onClick={goToCreateAccount}>
              <FormattedMessage id="createAccount" />
            </LinkContainer>
            <LinkContainer onClick={goToForgotPassword}>
              <FormattedMessage id="forgotPassword" />
            </LinkContainer>
          </>
        );
      case 'createAccount':
      case 'forgotPassword':
      case 'emailSent':
        return (
          <LinkContainer onClick={goToLogin}>
            <FormattedMessage id="backToLogin" />
          </LinkContainer>
        );
      case 'setUsername':
        return (
          <LinkContainer onClick={logout}>
            <FormattedMessage id="logout" />
          </LinkContainer>
        );
      case 'authenticated':
        return null;
    }
  };

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
