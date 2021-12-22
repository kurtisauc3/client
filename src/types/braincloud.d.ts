declare module 'braincloud' {
  type SuccessResult<T> = {
    status: number;
    data: T;
  };
  type ErrorResult = {
    reason_code: number;
    status: number;
    status_message: string;
  };
  type Result<T> = SuccessResult<T> | ErrorResult;
  type AuthenticateUniversalResult = {};
  type PlayerStateLogoutResult = {};
  class BrainCloudWrapper {
    constructor(name: string);
    initialize(id: string, secret: string, version: string);
    authenticateUniversal(
      userId: string,
      password: string,
      forceCreate: boolean,
      callback: (result: Result<AuthenticateUniversalResult>) => void
    );
    playerState: {
      logout(callback: (result: Result<PlayerStateLogoutResult>) => void);
    };
    getStoredProfileId(): string;
  }
}
