import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from 'core/services/api';
import { ApiAction, RootState } from './store';

interface TEventsState {
  incomingEvents?: Array<IncomingEvents>;
  friends?: Array<UserPresence>;
  profile?: UserPresence;
}

const initialState: TEventsState = {};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Array<IncomingEvents> | undefined>) => {
      state.incomingEvents = action.payload;
    },
    setProfile: (state, action: PayloadAction<UserPresence | undefined>) => {
      state.profile = action.payload;
    },
    setFriends: (state, action: PayloadAction<Array<UserPresence> | undefined>) => {
      state.friends = action.payload;
    },
    reset: () => initialState
  }
});

export default slice;

export const selectFriendRequests = (state: RootState) =>
  state.user.incomingEvents?.filter((ev) => ev.eventType === 'friendRequest');

export const loadEvents = (): ApiAction => (dispatch) => {
  api.event.getEvents((result) => {
    if ('data' in result) {
      dispatch(slice.actions.setEvents(result.data.incoming_events));
    }
  });
};
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
