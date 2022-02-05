import { createContext, useContext } from 'react';

export type TSocialModal = undefined | 'addFriend' | 'friendRequests';
type TSocialModalValue = {
  modal: TSocialModal;
  setModal: React.Dispatch<TSocialModal>;
};

export const SocialModalContext = createContext<TSocialModalValue>({
  modal: undefined,
  setModal: () => {}
});
export const useSocialModal = () => useContext(SocialModalContext);
