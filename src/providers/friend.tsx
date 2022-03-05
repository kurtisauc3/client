import { createContext, FC, useContext, useState } from 'react';
import api from 'services/api';

interface IFriendContext {
  friends?: Array<UserPresence>;
  friendRequests?: {
    outgoing: Array<UserPresence>;
    incoming: Array<UserPresence>;
  };
  loadFriends: () => void;
  loadFriendRequests: () => void;
  findUserByExactUniversalId: typeof api.friend.findUserByExactUniversalId;
  sendFriendRequest: (profileId: string) => void;
  cancelFriendRequest: (profileId: string) => void;
  acceptFriendRequest: (profileId: string) => void;
  declineFriendRequest: (profileId: string) => void;
}

const FriendContext = createContext<IFriendContext>({
  loadFriends: () => {},
  loadFriendRequests: () => {},
  findUserByExactUniversalId: () => {},
  sendFriendRequest: () => {},
  cancelFriendRequest: () => {},
  acceptFriendRequest: () => {},
  declineFriendRequest: () => {}
});

const useFriend = () => {
  const context = useContext(FriendContext);
  if (context === undefined) {
    throw new Error('useFriend must be used within an FriendProvider');
  }
  return context;
};

const FriendProvider: FC = (props) => {
  // TODO: friend provider
  const [friends, setFriends] = useState<IFriendContext['friends']>();
  const [friendRequests, setFriendRequests] = useState<IFriendContext['friendRequests']>();
  const loadFriends: IFriendContext['loadFriends'] = () => {};
  const loadFriendRequests: IFriendContext['loadFriendRequests'] = () => {};
  const findUserByExactUniversalId: IFriendContext['findUserByExactUniversalId'] = () => {};
  const sendFriendRequest: IFriendContext['sendFriendRequest'] = () => {};
  const cancelFriendRequest: IFriendContext['cancelFriendRequest'] = () => {};
  const acceptFriendRequest: IFriendContext['acceptFriendRequest'] = () => {};
  const declineFriendRequest: IFriendContext['declineFriendRequest'] = () => {};

  return (
    <FriendContext.Provider
      value={{
        friends,
        friendRequests,
        loadFriends,
        loadFriendRequests,
        findUserByExactUniversalId,
        sendFriendRequest,
        cancelFriendRequest,
        acceptFriendRequest,
        declineFriendRequest
      }}
      {...props}
    />
  );
};

export { FriendProvider, useFriend };
