import React, { FC } from 'react';

type Props = {
  userPresence: UserPresence;
};

const Component: FC<Props> = ({ userPresence }) => {
  return (
    <>
      <div>id: {userPresence.user.id}</div>
      <div>name: {userPresence.user.name}</div>
      <div>pic: {userPresence.user.pic}</div>
      <div>online: {String(userPresence.online)}</div>
    </>
  );
};

export default Component;
