import Background from 'assets/images/background.jpeg';
import { TAN } from 'core/components/Colors';
import React, { FC } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Social from './Social';

const Container = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  * {
    color: ${TAN};
    letter-spacing: 2px;
  }
`;
const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SocialContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;
const BackgroundContainer = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  filter: blur(4px);
  z-index: -1;
`;

const Component: FC = () => {
  return (
    <Container>
      <BodyContainer>
        <Header />
        <Body />
      </BodyContainer>
      <SocialContainer>
        <ProfileCard />
        <Social />
      </SocialContainer>
      <BackgroundContainer src={Background} />
    </Container>
  );
};

export default Component;
