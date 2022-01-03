import { BLACK, DARK_PURPLE, TAN, WHITE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import React, { FC } from 'react';
import styled from 'styled-components';

interface IUserCardProps {
  level?: number;
  pic?: string;
  name: string;
}

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

const Component: FC<IUserCardProps> = ({ level, pic, name }) => {
  return (
    <Container>
      <PictureContainer>
        <LevelContainer>{level}</LevelContainer>
        <img alt="logo" src={pic} />
      </PictureContainer>
      <UserContainer>
        <UsernameContainer>{name}</UsernameContainer>
      </UserContainer>
    </Container>
  );
};

export default Component;
