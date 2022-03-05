import { FriendProvider } from 'providers/friend';
import { FC } from 'react';
import FriendView from './Friend.View';

const Component: FC = () => {
  return (
    <FriendProvider>
      <FriendView />
    </FriendProvider>
  );
};

export default Component;
