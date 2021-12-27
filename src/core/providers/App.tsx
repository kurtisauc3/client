import React, { createContext, FC, useState } from 'react';

type TAppState = 'authentication' | 'idle';

interface IAppContext {
  appState: TAppState;
  setAppState: React.Dispatch<TAppState>;
}

export const AppContext = createContext({} as IAppContext);

const AppProvider: FC = ({ children }) => {
  const [appState, setAppState] = useState<TAppState>('authentication');

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
