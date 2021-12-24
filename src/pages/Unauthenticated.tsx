import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import loading from '../assets/images/loading.gif';
import logo from '../assets/images/logo.png';
import cover from '../assets/images/cover.jpeg';
import useErrorCode from '../core/hooks/useErrorCode';
import api from '../core/services/brainCloudClient';
import { AuthContext } from '../core/providers/Auth';
import Form from '../core/components/Form';

interface ILogin {
  username: string;
  password: string;
}

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

const VersionContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  opacity: 0.5;
`;

const Component: FC = () => {
  const { login } = useContext(AuthContext);
  const version = api.getAppVersion();

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img alt="logo" src={logo} />
        </LogoContainer>
        <Form<ILogin>
          titleKey="signIn"
          fieldData={{
            username: {
              editorType: 'input',
              initialValue: '',
              props: {
                required: true
              }
            },
            password: {
              editorType: 'input',
              initialValue: '',
              props: {
                type: 'password',
                required: true
              }
            }
          }}
          onSubmit={({ username, password }) => login(username, password)}
        />
        <VersionContainer>{version}</VersionContainer>
      </LoginContainer>
      <CoverContainer>
        <img alt="cover" src={cover} />
      </CoverContainer>
    </Container>
  );
};

export default Component;
