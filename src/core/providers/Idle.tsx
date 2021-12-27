import React, { createContext, FC, useState } from 'react';

type TIdleState = 'home' | 'play' | 'profile';

interface IIdleContext {
  idleState: TIdleState;
  setIdleState: React.Dispatch<TIdleState>;
}

export const IdleContext = createContext({} as IIdleContext);

const Provider: FC = ({ children }) => {
  const [idleState, setIdleState] = useState<TIdleState>('home');

  return (
    <IdleContext.Provider
      value={{
        idleState,
        setIdleState
      }}
    >
      {children}
    </IdleContext.Provider>
  );
};

export default Provider;
