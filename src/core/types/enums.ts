export enum ReasonCode {
  UsernameTaken = 40207,
  UsernameDoesNotExist = 40208,
  EmailNotRegistered = 40209,
  UserSessionExpired = 40304,
  InvalidCredentials = 40307,
  LoggedInElsewhere = 40356
}
export enum CustomSuccessCode {
  FriendRequestSent = 22201,
  FriendRequestAccepted = 22202,
  FriendRequestDeclined = 22203
}
export enum CustomErrorCode {
  NoUserByThatName = 99901,
  RequestAlreadyReceived = 99902,
  UserAlreadyAdded = 99903,
  RequestAlreadySent = 99904,
  CannotAddYourself = 99905
}
