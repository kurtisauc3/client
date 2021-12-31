import { BLACK, GREY } from 'core/components/Colors';
import idle from 'core/services/idle';
import { useAppDispatch } from 'core/services/store';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Social from './Social';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  background-color: ${BLACK};
  * {
    color: ${GREY};
  }
`;
const BodyContainer = styled.div`
  flex-grow: 1;
`;

const SocialContainer = styled.div`
  width: 250px;
`;

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = idle.actions;

  useEffect(() => {
    return () => {
      dispatch(reset);
    };
  }, []);

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
