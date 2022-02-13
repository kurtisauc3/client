import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from 'services/api';
import { ApiAction } from './index';

interface TUserStore {
  friends?: Array<UserPresence>;
  profile?: UserPresence;
  messaging: Record<string, MessagesPage | undefined>;
}
interface SetMessageBoxAction {
  fromProfileId: string;
  messagesPage: MessagesPage;
}

const initialState: TUserStore = {
  messaging: {}
};

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
    setMessageBox: (state, action: PayloadAction<SetMessageBoxAction>) => {
      const { fromProfileId, messagesPage } = action.payload;
      state.messaging[fromProfileId] = messagesPage;
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

// TODO: move to cloudscript
export const loadUnreadMessages = (): ApiAction => (dispatch) => {
  api.messaging.getMessagesPage(
    {
      searchCriteria: {
        msgbox: 'inbox',
        'message.to': api.getProfileId(),
        read: false
      }
    },
    (result) => {
      if ('data' in result) {
        const fromProfileIds = [
          ...new Set(result.data.results.items.map((item) => item.message.from.id))
        ];
        for (const fromProfileId of fromProfileIds) {
          dispatch(loadMessagesPage(fromProfileId));
        }
      }
    }
  );
};

// TODO: move to cloudscript
export const loadMessagesPage =
  (fromProfileId: string): ApiAction =>
  (dispatch) => {
    api.messaging.getMessagesPage(
      {
        searchCriteria: {
          $or: [{ 'message.from': fromProfileId }, { 'message.to': api.getProfileId() }]
        },
        sortCriteria: {
          mbCr: -1
        }
      },
      (result) => {
        if ('data' in result) {
          dispatch(
            slice.actions.setMessageBox({ fromProfileId, messagesPage: result.data.results })
          );
        }
      }
    );
  };
