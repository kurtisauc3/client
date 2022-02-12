import React, { FC } from 'react';
import Logout from './Logout';
import UpdateUserName from './UpdateUserName';
import UpdateUserPictureUrl from './UpdateUserPictureUrl';

const Component: FC = () => {
  return (
    <div>
      <>user state</>
      <UpdateUserName />
      <UpdateUserPictureUrl />
      <Logout />
    </div>
  );
};

export default Component;
