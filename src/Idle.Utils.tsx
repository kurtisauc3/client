import { createContext, FC, useContext, useState } from 'react';

type TIdleState =
  | {
      view: 'home';
    }
  | {
      view: 'play';
    }
  | {
      view: 'profile';
    };

interface IIdleContext {
  state: TIdleState;
  setState: React.Dispatch<TIdleState>;
}

const IdleContext = createContext<IIdleContext>({
  state: {
    view: 'home'
  },
  setState: () => {}
});

const useIdle = () => {
  const context = useContext(IdleContext);
  if (context === undefined) {
    throw new Error('useIdle must be used within an IdleProvider');
  }
  return context;
};

const IdleProvider: FC = (props) => {
  // TODO: idle provider
  const [state, setState] = useState<IIdleContext['state']>({
    view: 'home'
  });

  return <IdleContext.Provider value={{ state, setState }} {...props} />;
};

export { IdleProvider, useIdle };
