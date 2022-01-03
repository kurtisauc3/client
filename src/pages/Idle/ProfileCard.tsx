import DefaultPicture from 'assets/images/DefaultPicture.png';
import { BLACK, DARK_PURPLE, TAN, WHITE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import api from 'core/services/api';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled(Nav)`
  display: flex;
  flex-direction: row;
  background-color: ${DARK_PURPLE + 'CC'};
  padding: 5px;
  * {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

const PictureContainer = styled.div`
  height: calc(100% - 10px);
  position: relative;
  img {
    border: 2px solid ${TAN};
    border-radius: 50%;
    background-color: ${BLACK};
    object-fit: contain;
    min-height: 100%;
    max-height: 100%;
    opacity: 0.8;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
const LevelContainer = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10px);
  border: 2px solid ${TAN};
  background-color: ${BLACK};
  padding: 0 10px;
`;

const UserContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const UsernameContainer = styled.div`
  color: ${WHITE};
`;

const StatusContainer = styled.div``;

const Component: FC = () => {
  const [profile, setProfile] = useState<RegisterListenersForProfilesResult>();
  useEffect(() => {
    let unmounting = false;
    api.presence.registerListenersForProfiles([api.getProfileId()], true, (result) => {
      if ('data' in result) {
        console.log(result.data);
      }
    });
    return () => {
      unmounting = true;
      api.presence.stopListening();
    };
  }, []);

  return (
    <Container>
      <PictureContainer>
        <LevelContainer></LevelContainer>
        <img alt="logo" src={DefaultPicture} />
      </PictureContainer>
      <UserContainer>
        <UsernameContainer></UsernameContainer>
        <StatusContainer></StatusContainer>
      </UserContainer>
    </Container>
  );
};

export default Component;
