import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from 'services/api';
import { ApiAction } from './index';

interface TUserStore {
  friends?: Array<UserPresence>;
  profile?: UserPresence;
}

const initialState: TUserStore = {};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserPresence>) => {
      state.profile = action.payload;
    },
    setFriends: (state, action: PayloadAction<Array<UserPresence>>) => {
      state.friends = action.payload;
    },
    reset: () => initialState
  }
});

export default slice;

export const loadProfile = (): ApiAction => (dispatch) => {
  api.presence.getPresenceOfUsers([api.getProfileId()], true, (result) => {
    if ('data' in result) {
      dispatch(slice.actions.setProfile(result.data.presence[0]));
    }
  });
};

export const loadFriends = (): ApiAction => (dispatch) => {
  api.presence.getPresenceOfFriends('all', true, (result) => {
    if ('data' in result) {
      dispatch(slice.actions.setFriends(result.data.presence));
    }
  });
};
