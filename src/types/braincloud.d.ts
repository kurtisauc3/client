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
enum ReasonCode {
  UsernameTaken = 40207,
  UsernameDoesNotExist = 40208,
  EmailNotRegistered = 40209,
  UserSessionExpired = 40304,
  InvalidCredentials = 40307
}
enum CustomSuccessCode {
  FriendRequestSent = 22201
}
enum CustomErrorCode {
  NoUserByThatName = 99901,
  RequestAlreadyReceived = 99902,
  UserAlreadyAdded = 99903,
  RequestAlreadySent = 99904,
  CannotAddYourself = 99905
}
type CustomCode = ReasonCode | CustomErrorCode | CustomSuccessCode;
type Result<T> = SuccessResult<T> | ErrorResult;
type AuthenticateEmailPasswordResult = {};
type ResetEmailPasswordResult = {};
type PlayerStateLogoutResult = {};
type GetIdentitiesResult = {
  identities: {
    Email: string;
    Universal: string | undefined;
  };
};
type EnableRTTResult = {};
type StopListeningResult = {};
type UserPresence = {
  user: {
    id: string;
    name: string;
    pic: string | null;
    cxs: Array<string>;
  };
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
type FriendRequestEvent = EventBase & {
  eventType: 'friendRequest';
  eventData: {
    entityId: string;
    summaryData: FriendSummaryData;
  };
};
type IncomingEvents = FriendRequestEvent;
type RegisterRTTEventCallbackResult = {
  data: IncomingEvents;
  operation: 'GET_EVENTS';
  service: 'event';
};
type GetEventsResult = {
  incoming_events: Array<IncomingEvents>;
};
type FriendRequestScriptSuccessResult = {
  friendRequests: Record<
    string,
    {
      status: 'pending' | 'accepted';
      summaryData: FriendSummaryData;
    }
  >;
};
type FriendRequestScriptErrorResult = {
  custom_error: CustomErrorCode;
};
type FriendRequestScriptResult = {
  response: FriendRequestScriptSuccessResult | FriendRequestScriptErrorResult;
  success: true;
};

declare module 'braincloud' {
  class BrainCloudWrapper {
    constructor(name: string);
    brainCloudClient: {
      initialize(id: string, secret: string, version: string);
      authentication: {
        authenticateEmailPassword(
          email: string,
          password: string,
          forceCreate: boolean,
          callback: (result: Result<AuthenticateEmailPasswordResult>) => void
        );
        resetEmailPassword(
          email: string,
          callback: (result: Result<ResetEmailPasswordResult>) => void
        );
      };
      event: {
        getEvents(callback: (result: Result<GetEventsResult>) => void);
      };
      identity: {
        getIdentities(callback: (result: Result<GetIdentitiesResult>) => void);
        attachNonLoginUniversalId(
          externalId: string,
          callback: (result: Result<GetIdentitiesResult>) => void
        );
      };
      playerState: {
        logout(callback: (result: Result<PlayerStateLogoutResult>) => void);
      };
      presence: {
        stopListening(callback?: (result: Result<StopListeningResult>) => void);
        registerListenersForProfiles(
          profileIds: Array<string>,
          bidirectional: boolean,
          callback: (result: Result<RegisterListenersForProfilesResult>) => void
        );
        registerListenersForFriends(
          platform: 'all' | 'brainCloud' | 'facebook',
          bidirectional: boolean,
          callback: (result: Result<RegisterListenersForProfilesResult>) => void
        );
      };
      rttService: {
        enableRTT(callback: (result: Result<EnableRTTResult>) => void);
        disableRTT();
        registerRTTEventCallback(callback: (result: RegisterRTTEventCallbackResult) => void);
        deregisterRTTEventCallback(): void;
      };
      script: {
        runScript(
          scriptName: 'sendFriendRequest',
          jsonScriptData: { username: string },
          callback: (result: Result<FriendRequestScriptResult>) => void
        );
      };
      getAppVersion(): string;
      getProfileId(): string;
      setErrorCallback(callback: (error: ErrorResult) => void);
    };
  }
}
