import React, { FC } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Social from './Social';

const HEADER_HEIGHT = '80px';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  div {
    :first-child {
      height: ${HEADER_HEIGHT};
    }
  }
`;
const BodyContainer = styled.div`
  flex-grow: 1;
`;

const SocialContainer = styled.div`
  width: 250px;
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
    </Container>
  );
};

export default Component;
