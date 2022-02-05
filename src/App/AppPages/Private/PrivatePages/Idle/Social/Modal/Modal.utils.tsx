import React, { useCallback } from 'react';
import { TSocialModal } from '../Social.utils';
import AddFriend from './AddFriend';
import FriendRequests from './FriendRequests';

const useModalUtils = (modal: TSocialModal) => {
  const renderBody = useCallback((): React.ReactNode => {
    switch (modal) {
      case 'addFriend':
        return <AddFriend />;
      case 'friendRequests':
        return <FriendRequests />;
    }
  }, [modal]);
  return { renderBody };
};

export default useModalUtils;
