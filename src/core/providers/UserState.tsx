import React, { createContext, FC, useState } from 'react';

export type TUserState = 'login' | 'idle' | 'lobby' | 'room' | 'results';

export type TUserStateContext = {
  userState: TUserState;
  setUserState: React.Dispatch<TUserState>;
};

export const UserStateContext = createContext({} as TUserStateContext);

export const UserStateProvider: FC = ({ children }) => {
  const [userState, setUserState] = useState<TUserState>('login');
  return (
    <UserStateContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserStateProvider;
