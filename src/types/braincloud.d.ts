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
type IncomingEvents = {
  eventType: string;
  eventData: Record<string, unknown>;
};
type RegisterRTTEventCallbackResult = {
  data: IncomingEvents;
  operation: 'GET_EVENTS';
  service: 'event';
};
type RegisterRTTPresenceCallbackResult = {};
type GetEventsResult = {
  incoming_events: Array<IncomingEvents>;
};
type PresencePlatform = 'all' | 'brainCloud' | 'facebook';
type RTTStatus = 'connected' | 'disconnected';
type AddFriendsResult = {};

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
        addFriends(profileIds: string[], callback: (result: Result<AddFriendsResult>) => void);
      };
      identity: {
        getIdentities(callback: (result: Result<GetIdentitiesResult>) => void);
        attachNonLoginUniversalId(
          externalId: string,
          callback?: (result: Result<GetIdentitiesResult>) => void
        );
      };
      playerState: {
        logout(callback?: (result: Result<PlayerStateLogoutResult>) => void);
      };
      presence: {
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
      };
      getAppVersion(): string;
      getProfileId(): string;
      setErrorCallback(callback?: (error: ErrorResult) => void);
    };
  }
}
