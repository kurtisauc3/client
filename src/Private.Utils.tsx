import { createContext, FC, useContext, useState } from 'react';

type TPrivateState =
  | {
      view: 'idle';
    }
  | {
      view: 'room';
    }
  | {
      view: 'game';
    }
  | {
      view: 'results';
    };

interface IPrivateContext {
  state: TPrivateState;
  setState: React.Dispatch<TPrivateState>;
}

const PrivateContext = createContext<IPrivateContext>({
  state: {
    view: 'idle'
  },
  setState: () => {}
});

const usePrivate = () => {
  const context = useContext(PrivateContext);
  if (context === undefined) {
    throw new Error('usePrivate must be used within an PrivateProvider');
  }
  return context;
};

const PrivateProvider: FC = (props) => {
  // TODO: private provider
  const [state, setState] = useState<IPrivateContext['state']>({
    view: 'idle'
  });

  return <PrivateContext.Provider value={{ state, setState }} {...props} />;
};

export { PrivateProvider, usePrivate };
