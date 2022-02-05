import Colors from 'core/components/Colors';
import React, { FC } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import Notification, { TNotificationProps } from './Notification';

type TModalProps = TNotificationProps & {
  onCloseClick?: () => void;
};

const CloseButton = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: ${Colors.DARK_PURPLE};
  border-radius: 50%;
  border: 2px solid ${Colors.DARK_PURPLE};
  width: 29px;
  height: 29px;
  transform: translate(50%, -50%);
  cursor: pointer;
  :hover {
    opacity: 1;
    border-color: ${Colors.WHITE};
  }
`;
const Content = styled.div`
  margin: 10px 20px;
`;

const Component: FC<TModalProps> = (props) => {
  const { onCloseClick, children, ...rest } = props;
  return (
    <Notification {...rest}>
      <CloseButton onClick={onCloseClick}>
        <FaTimesCircle size={25} />
      </CloseButton>
      <Content>{children}</Content>
    </Notification>
  );
};

export default Component;
