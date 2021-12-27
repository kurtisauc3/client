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
type AuthenticateUniversalResult = {};
type ResetUniversalIdPasswordWithExpiryResult = {};
type PlayerStateLogoutResult = {};

declare module 'braincloud' {
  class BrainCloudWrapper {
    constructor(name: string);
    brainCloudClient: {
      initialize(id: string, secret: string, version: string);
      authentication: {
        authenticateUniversal(
          userId: string,
          password: string,
          forceCreate: boolean,
          callback: (result: Result<AuthenticateUniversalResult>) => void
        );
        resetUniversalIdPassword(
          userId: string,
          callback: (result: Result<ResetUniversalIdPasswordWithExpiryResult>) => void
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
