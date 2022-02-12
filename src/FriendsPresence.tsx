import React, { FC } from 'react';
import { useAppSelector } from 'store';
import UserPresence from './UserPresence';

const Component: FC = () => {
  const friends = useAppSelector((state) => state.user.friends);
  return (
    <div>
      <>friends presence</>
      {friends &&
        friends.map((friend) => (
          <div key={friend.user.id}>
            <UserPresence value={friend} />
          </div>
        ))}
    </div>
  );
};

export default Component;
