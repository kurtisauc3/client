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
  data: Omit<UserPresence, 'user'> & {
    from: UserPresenceData;
  };
  operation: 'INCOMING';
  service: 'presence';
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
