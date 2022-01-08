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
      };
      rttService: {
        enableRTT(callback: (result: Result<EnableRTTResult>) => void);
        disableRTT();
      };
      getAppVersion(): string;
      getProfileId(): string;
      setErrorCallback(callback: (error: ErrorResult) => void);
    };
  }
}
