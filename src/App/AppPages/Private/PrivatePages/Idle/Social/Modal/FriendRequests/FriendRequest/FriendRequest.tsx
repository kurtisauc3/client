import Avatar from 'core/components/Avatar';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ActionButton, Name, PictureContainer, RequestContainer } from './FriendRequest.styles';
import useFriendRequestUtils from './FriendRequest.utils';

type TFriendRequestProps = React.HTMLAttributes<HTMLDivElement> & {
  friendRequest: FriendRequestEvent;
};

const Component: FC<TFriendRequestProps> = (props) => {
  const { friendRequest, ...rest } = props;
  const { handleAccept, handleDecline } = useFriendRequestUtils(friendRequest);
  const {
    eventData: {
      summaryData: { pictureUrl, profileName }
    }
  } = friendRequest;

  return (
    <RequestContainer {...rest}>
      <PictureContainer>
        <Avatar src={pictureUrl} />
      </PictureContainer>
      <Name>{profileName}</Name>
      <ActionButton onClick={handleAccept}>
        <FormattedMessage id="accept" />
      </ActionButton>
      <ActionButton onClick={handleDecline}>
        <FormattedMessage id="decline" />
      </ActionButton>
    </RequestContainer>
  );
};

export default Component;
