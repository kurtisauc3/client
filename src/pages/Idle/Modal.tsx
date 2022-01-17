import Border from 'core/components/Border';
import { DARK_PURPLE, WHITE } from 'core/components/Colors';
import idle from 'core/services/idle';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import AddFriends from './Social/AddFriends';
import FriendRequests from './Social/FriendRequests';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BorderContainer = styled.div`
  position: relative;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${DARK_PURPLE};
  border-radius: 50%;
  border: 2px solid ${DARK_PURPLE};
  width: 29px;
  height: 29px;
  transform: translate(50%, -50%);
  cursor: pointer;
  :hover {
    opacity: 1;
    border-color: ${WHITE};
  }
`;
const Content = styled.div`
  margin: 10px 20px;
`;
const Component: FC = () => {
  const modal = useAppSelector((state) => state.idle.modal);
  const dispatch = useAppDispatch();
  const { hideModal } = idle.actions;

  if (modal === 'hidden') {
    return null;
  }

  const renderBody = (): React.ReactNode => {
    switch (modal) {
      case 'addFriends':
        return <AddFriends />;
      case 'friendRequests':
        return <FriendRequests />;
    }
  };

  return (
    <Container>
      <BorderContainer>
        <CloseButton
          onClick={() => {
            dispatch(hideModal());
          }}
        >
          <FaTimesCircle size={25} />
        </CloseButton>
        <Border>
          <Content>{renderBody()}</Content>
        </Border>
      </BorderContainer>
    </Container>
  );
};

export default Component;
