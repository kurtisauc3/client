type SuccessResult<T> = {
  status: number;
  data: T;
};
type ErrorResult = {
  reason_code: number;
  severity: string;
  status: number;
  status_message: string;
};

type CustomCode = number;
type Result<T> = SuccessResult<T> | ErrorResult;
type AuthenticateUniversalResult = {};
type PlayerStateLogoutResult = {};
type EnableRTTResult = {};
type StopListeningResult = {};
type UserPresenceData = {
  id: string;
  name: string;
  pic: string | null;
  cxs: Array<string>;
};
type UserPresence = {
  user: UserPresenceData;
  online: boolean;
  summaryFriendData: {};
  activity: {};
};
type RegisterListenersForProfilesResult = {
  presence: Array<UserPresence>;
};
type EventBase = {
  createdAt: number;
  evId: string;
  fromPlayerId: string;
  toPlayerId: string;
};
type FriendSummaryData = {
  pictureUrl: string;
  email: string;
  profileId: string;
  playerSummaryData: {};
  profileName: string;
};
type IncomingEvents = {
  eventType: string;
  eventData: Record<string, unknown>;
};
type RegisterRTTEventCallbackResult = {
  data: IncomingEvents;
  operation: 'GET_EVENTS';
  service: 'event';
};
type RegisterRTTPresenceCallbackResult = {
  data: {
    from: UserPresenceData;
    online: boolean;
    summaryFriendData: {};
    activity: {};
  };
  operation: 'INCOMING';
  service: 'presence';
};
type RegisterRTTMessagingCallbackResult = {
  data: {
    msgbox: MessageBox;
    msgId: string;
    message: {
      content: {
        text: string;
      };
      from: {
        id: string;
        name: string;
      };
      sentAt: number;
      to: string[];
    };
  };
  operation: 'INCOMING';
  service: 'messaging';
};
type GetEventsResult = {
  incoming_events: Array<IncomingEvents>;
};
type PresencePlatform = 'all' | 'brainCloud' | 'facebook';
type RTTStatus = 'connecting' | 'connected';
type AddFriendsResult = {};
type RemoveFriendsResult = {};
type UpdateUserNameResult = {};
type UpdateUserPictureResult = {};
type MessageBox = 'inbox' | 'sent';
type MessagesPageContext = {
  pagination?: {
    rowsPerPage: number;
    pageNumber: number;
  };
  searchCriteria?: Record<string, any>;
  sortCriteria?: {
    mbCr: -1;
  };
};
type MessageItem = {
  msgbox: 'inbox' | 'sent';
  msgId: string;
  mbVer: number;
  mbCr: number;
  mbUp: number;
  read: boolean;
  message: {
    sentAt: number;
    from: {
      id: string;
      name: string;
    };
    to: string[];
    content: {
      text: string;
    };
  };
  msVer: number;
  msgCr: number;
  msgUp: number;
};
type MessagesPage = {
  count: number;
  page: number;
  items: Array<MessageItem>;
};
type GetMessagesPageResult = {
  context: string;
  results: MessagesPage;
};
type SendSimpleMessageResult = {};
type MarkMessagesReadResult = {};
type DeleteMessagesResult = {};

declare module 'braincloud' {
  class BrainCloudWrapper {
    constructor(name: string);
    brainCloudClient: {
      initialize(id: string, secret: string, version: string);
      authentication: {
        authenticateUniversal(
          universalId: string,
          password: string,
          forceCreate: boolean,
          callback?: (result: Result<AuthenticateUniversalResult>) => void
        );
      };
      event: {
        getEvents(callback: (result: Result<GetEventsResult>) => void);
      };
      friend: {
        addFriends(profileIds: string[], callback?: (result: Result<AddFriendsResult>) => void);
        removeFriends(
          profileIds: string[],
          callback?: (result: Result<RemoveFriendsResult>) => void
        );
      };
      identity: {
        getIdentities(callback: (result: Result<GetIdentitiesResult>) => void);
        attachNonLoginUniversalId(
          externalId: string,
          callback?: (result: Result<GetIdentitiesResult>) => void
        );
      };
      messaging: {
        getMessagesPage(
          context: MessagesPageContext,
          callback?: (result: Result<GetMessagesPageResult>) => void
        );
        markMessagesRead(
          msgbox: MessageBox,
          msgIds: string[],
          callback?: (result: Result<MarkMessagesReadResult>) => void
        );
        deleteMessages(
          msgbox: MessageBox,
          msgIds: string[],
          callback?: (result: Result<DeleteMessagesResult>) => void
        );
        sendMessageSimple(
          toProfileIds: string[],
          contentString: string,
          callback?: (result: Result<SendSimpleMessageResult>) => void
        );
      };
      playerState: {
        updateUserPictureUrl(
          userPictureUrl: string | null,
          callback?: (result: Result<UpdateUserPictureResult>) => void
        );
        updateUserName(userName: string, callback?: (result: Result<UpdateUserNameResult>) => void);
        logout(callback?: (result: Result<PlayerStateLogoutResult>) => void);
      };
      presence: {
        forcePush(callback?: (result: Result<ForcePushResult>) => void);
        setVisibility(visible: boolean, callback?: (result: Result<SetVisibilityResult>) => void);
        getPresenceOfFriends(
          platform: PresencePlatform,
          includeOffline: boolean,
          callback?: (result: Result<RegisterListenersForProfilesResult>) => void
        );
        getPresenceOfUsers(
          profileIds: Array<string>,
          includeOffline: boolean,
          callback?: (result: Result<RegisterListenersForProfilesResult>) => void
        );
        registerListenersForFriends(
          platform: PresencePlatform,
          bidirectional: boolean,
          callback?: (result: Result<RegisterListenersForProfilesResult>) => void
        );
        registerListenersForProfiles(
          profileIds: Array<string>,
          bidirectional: boolean,
          callback?: (result: Result<RegisterListenersForProfilesResult>) => void
        );
        stopListening(callback?: (result: Result<StopListeningResult>) => void);
      };
      rttService: {
        enableRTT(
          callback?: (result: Result<EnableRTTResult>) => void,
          errorCallback?: (error: EnableRTTError) => void
        );
        disableRTT();
        isRTTEnabled(): boolean;
        registerRTTMessagingCallback(
          callback?: (result: RegisterRTTMessagingCallbackResult) => void
        );
        registerRTTPresenceCallback(callback?: (result: RegisterRTTPresenceCallbackResult) => void);
        deregisterAllRTTCallbacks(): void;
      };
      getAppVersion(): string;
      getProfileId(): string;
      resetCommunication(): void;
      setErrorCallback(callback?: (error: ErrorResult) => void);
    };
  }
}
