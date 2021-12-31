import cover from 'assets/images/cover.jpeg';
import logo from 'assets/images/logo.png';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import React, { FC, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Authenticated from './Authenticated';
import CreateAccount from './CreateAccount';
import CreateUsername from './CreateUsername';
import EmailSent from './EmailSent';
import ForgotPassword from './ForgotPassword';
import Login from './Login';

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
  const view = useAppSelector((state) => state.auth.view);
  const dispatch = useAppDispatch();
  const { goTo, reset } = auth.actions;
  const version = api.getAppVersion();

  useEffect(() => {
    return () => {
      dispatch(reset);
    };
  }, []);

  const renderForm = (): React.ReactNode => {
    switch (view) {
      case 'login':
        return <Login />;
      case 'createAccount':
        return <CreateAccount />;
      case 'forgotPassword':
        return <ForgotPassword />;
      case 'emailSent':
        return <EmailSent />;
      case 'createUsername':
        return <CreateUsername />;
      case 'authenticated':
        return <Authenticated />;
    }
  };
  const renderLinks = () => {
    switch (view) {
      case 'login':
        return (
          <>
            <LinkContainer onClick={() => dispatch(goTo('createAccount'))}>
              <FormattedMessage id="createAccount" />
            </LinkContainer>
            <LinkContainer onClick={() => dispatch(goTo('forgotPassword'))}>
              <FormattedMessage id="forgotPassword" />
            </LinkContainer>
          </>
        );
      case 'createAccount':
      case 'forgotPassword':
      case 'emailSent':
        return (
          <LinkContainer onClick={() => dispatch(goTo('login'))}>
            <FormattedMessage id="backToLogin" />
          </LinkContainer>
        );
      case 'createUsername':
        return (
          <LinkContainer
            onClick={() => {
              api.playerState.logout((result) => {
                if ('data' in result) {
                  dispatch(goTo('login'));
                }
              });
            }}
          >
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
