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
  type IAuthenticateUniversal = {};
  class BrainCloudWrapper {
    constructor(name: string);
    initialize(id: string, secret: string, version: string);
    authenticateUniversal(
      userId: string,
      password: string,
      forceCreate: boolean,
      callback: (result: SuccessResult<IAuthenticateUniversal> | ErrorResult) => void
    );
    getStoredProfileId(): string;
  }
}
