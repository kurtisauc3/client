import { TAN } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import useMountedState from 'core/hooks/useMountedState';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch } from 'core/services/store';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';
import Modal from './Modal';
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
  border-left: 2px solid rgba(255, 255, 255, 0.1);
`;
const BackgroundContainer = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

const Component: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const isMounted = useMountedState();

  const dispatch = useAppDispatch();
  const { goTo } = auth.actions;
  useEffect(() => {
    api.rttService.enableRTT((result) => {
      if ('data' in result && isMounted()) {
        setIsConnected(true);
      }
    });
    return () => {
      api.rttService.disableRTT();
      dispatch(goTo('login'));
    };
  }, [isMounted, dispatch, goTo]);

  if (!isConnected) {
    return null;
  }

  return (
    <Container>
      <Modal />
      <BodyContainer>
        <Nav>
          <Header />
        </Nav>
        <Body />
      </BodyContainer>
      <SocialContainer>
        <Nav>
          <ProfileCard />
        </Nav>
        <Social />
      </SocialContainer>
    </Container>
  );
};

export default Component;
