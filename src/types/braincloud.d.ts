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
      getAppVersion(): string;
      setErrorCallback(callback: (error: ErrorResult) => void);
    };
  }
}
