import DefaultPicture from 'assets/images/DefaultPicture.png';
import { BLACK, DARK_PURPLE, GREEN, TAN, WHITE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

type IUserCardProps = React.HTMLAttributes<HTMLDivElement> & {
  userPresence?: UserPresence;
};

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
  height: 100%;
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

const UserContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const UsernameContainer = styled.div`
  color: ${WHITE}!important;
`;

const UserStatusContainer = styled.div`
  font-size: 14px;
  &.online {
    color: ${GREEN}!important;
  }
  &.offline {
    color: ${TAN}!important;
  }
`;

const Component: FC<IUserCardProps> = (props) => {
  const { userPresence, ...rest } = props;

  if (!userPresence) {
    return null;
  }
  const { online } = userPresence;
  const { name, pic } = userPresence.user;
  const imgSrc = pic || DefaultPicture;
  const userStatusClassName = online ? 'online' : 'offline';
  return (
    <Container {...rest}>
      <PictureContainer>
        <img alt="logo" src={imgSrc} />
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
