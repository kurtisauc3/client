import React, { FC } from 'react';

type Props = {
  value: UserPresence;
};

const Component: FC<Props> = ({ value }) => {
  return (
    <>
      <div>online: {String(value.online)}</div>
      <div>user.id: {value.user.id}</div>
      <div>user.name: {value.user.name}</div>
      <div>user.pic: {value.user.pic}</div>
    </>
  );
};

export default Component;
