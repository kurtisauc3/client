import cover from 'assets/images/cover.jpeg';
import logo from 'assets/images/logo.png';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  ButtonContainer,
  CheckboxContainer,
  Container,
  CoverContainer,
  FormContainer,
  InputContainer,
  LoginContainer,
  LogoContainer,
  TitleContainer,
  VersionContainer
} from './Login.styles';
import useLoginUtils from './Login.utils';

const Component: FC = () => {
  const {
    version,
    username,
    setUsername,
    password,
    setPassword,
    forceCreate,
    setForceCreate,
    handleSubmit
  } = useLoginUtils();

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img alt="logo" src={logo} />
        </LogoContainer>
        <FormContainer onSubmit={handleSubmit}>
          <TitleContainer>
            <FormattedMessage id="login" />
          </TitleContainer>
          <InputContainer>
            <label htmlFor="username">
              <FormattedMessage id="username" />
            </label>
            <input
              autoFocus
              onChange={({ target: { value } }) => {
                setUsername(value);
              }}
              id="username"
              value={username}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">
              <FormattedMessage id="password" />
            </label>
            <input
              type="password"
              onChange={({ target: { value } }) => {
                setPassword(value);
              }}
              id="password"
              value={password}
            />
          </InputContainer>
          <CheckboxContainer>
            <label htmlFor="forceCreate">
              <FormattedMessage id="forceCreate" />
            </label>
            <input
              type="checkbox"
              onChange={() => {
                setForceCreate(!forceCreate);
              }}
              id="forceCreate"
              checked={forceCreate}
            />
          </CheckboxContainer>
          <ButtonContainer>
            <button type="submit">→</button>
          </ButtonContainer>
        </FormContainer>
        <VersionContainer>{version}</VersionContainer>
      </LoginContainer>
      <CoverContainer>
        <img alt="cover" src={cover} />
      </CoverContainer>
    </Container>
  );
};

export default Component;
