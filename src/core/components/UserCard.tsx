import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Avatar from './Avatar';
import Colors from './Colors';

type IUserCardProps = React.HTMLAttributes<HTMLDivElement> & {
  userPresence: UserPresence;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 5px;
  height: 100%;
  width: 100%;
  * {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

const PictureContainer = styled.div`
  height: 100%;
  position: relative;
`;

const UserContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  justify-content: center;
  overflow: hidden;
`;

const UsernameContainer = styled.div`
  color: ${Colors.WHITE}!important;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
`;

const UserStatusContainer = styled.div`
  font-size: 14px;
  &.online {
    color: ${Colors.GREEN}!important;
  }
  &.offline {
    color: ${Colors.TAN}!important;
  }
`;

const Component: FC<IUserCardProps> = (props) => {
  const { userPresence, ...rest } = props;

  const { online } = userPresence;
  const { name, pic } = userPresence.user;
  const userStatusClassName = online ? 'online' : 'offline';
  return (
    <Container {...rest}>
      <PictureContainer>
        <Avatar alt="pic" src={pic} />
      </PictureContainer>
      <UserContainer>
        <UsernameContainer>{name}</UsernameContainer>
        <UserStatusContainer className={userStatusClassName}>
          <FormattedMessage id={userStatusClassName} />
        </UserStatusContainer>
      </UserContainer>
    </Container>
  );
};

export default Component;
