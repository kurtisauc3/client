import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TIdleView = 'home' | 'play' | 'profile';
type TModalView = 'hidden' | 'addFriends' | 'friendRequests';

interface IIdleState {
  view: TIdleView;
  modal: TModalView;
  friends: Array<UserPresence>;
  friendRequests: Array<FriendRequestEvent>;
}

const initialState: IIdleState = {
  view: 'home',
  modal: 'hidden',
  friends: [],
  friendRequests: []
};

const slice = createSlice({
  name: 'idle',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TIdleView>) => {
      state.view = action.payload;
    },
    showModal: (state, action: PayloadAction<Exclude<TModalView, 'hidden'>>) => {
      state.modal = action.payload;
    },
    hideModal: (state) => {
      state.modal = 'hidden';
    },
    setFriends: (state, action: PayloadAction<Array<UserPresence>>) => {
      state.friends = action.payload;
    },
    setFriendRequests: (state, action: PayloadAction<Array<FriendRequestEvent>>) => {
      state.friendRequests = action.payload;
    }
  }
});

export default slice;
