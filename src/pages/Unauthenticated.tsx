import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import loading from '../assets/images/loading.gif';
import logo from '../assets/images/logo.png';
import cover from '../assets/images/cover.jpeg';
import useErrorCode from '../core/hooks/useErrorCode';
import api from '../core/services/brainCloudClient';
import { AuthContext } from '../core/providers/Auth';

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
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
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

const FormContainer = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
const InputContainer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 8px;
  margin: 5px 0;
  border: 2px solid rgba(0, 0, 0, 0);
  &:focus-within {
    background: none;
    border: 2px solid #353839;
    label {
      font-size: 12px;
    }
  }
  label {
    color: rgba(0, 0, 0, 0.5);
  }
  input {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: bold;
    font-size: 18px;
    background: none;
    width: 100%;
    border: none;
    padding: 5px 0;
    &:focus {
      outline: none;
    }
  }
`;
const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 15px;
    padding: 20px 25px;
    font-size: 30px;
    color: white;
    background: #ff4026;
    border: 2px solid #ff4026;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.1);
      background: none;
      border: 2px solid rgba(0, 0, 0, 0.1);
      cursor: default;
      :hover {
        opacity: 1;
      }
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 100px;
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  div {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-right: 10px;
    span {
      visibility: hidden;
      padding: 1px 2px;
    }
  }
  label {
    color: rgba(0, 0, 0, 0.5);
  }
  &.checked {
    div {
      background: #ff4026;
      span {
        color: white;
        visibility: visible;
      }
    }
  }
`;

const ErrorContainer = styled.div`
  color: #ff4026;
`;

const Component: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [version, setVersion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorCode, clearErrorCode] = useErrorCode();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setVersion(api.getAppVersion());
  }, []);

  useEffect(() => {
    setSubmitting(false);
  }, [errorCode]);

  useEffect(() => {
    clearErrorCode();
  }, [username, password]);

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img alt="logo" src={logo} />
        </LogoContainer>
        <ContentContainer>
          {submitting ? (
            <LoadingContainer>
              <img alt="loading" src={loading} />
            </LoadingContainer>
          ) : (
            <FormContainer
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                login(username, password);
              }}
            >
              <TitleContainer>
                <FormattedMessage id="login.signIn" />
              </TitleContainer>

              {errorCode && (
                <ErrorContainer>
                  <FormattedMessage id={`login.error.${errorCode}`} />
                </ErrorContainer>
              )}
              <InputContainer>
                <label htmlFor="username">
                  <FormattedMessage id="login.username" />
                </label>
                <input
                  autoFocus
                  id="username"
                  value={username}
                  onChange={({ target: { value } }) => setUsername(value)}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="password">
                  <FormattedMessage id="login.password" />
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                />
              </InputContainer>
              <ButtonContainer>
                <button disabled={!username.length || !password.length} type="submit">
                  →
                </button>
              </ButtonContainer>
            </FormContainer>
          )}
        </ContentContainer>
        <VersionContainer>{version}</VersionContainer>
      </LoginContainer>
      <CoverContainer>
        <img alt="cover" src={cover} />
      </CoverContainer>
    </Container>
  );
};

export default Component;
