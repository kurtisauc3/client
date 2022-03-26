import { createContext, FC, useContext, useState } from 'react';

interface IPrivateState {
  view: 'idle' | 'room' | 'game' | 'results';
}

interface IPrivateContext {
  state: IPrivateState;
  setState: React.Dispatch<IPrivateState>;
}

const PrivateContext = createContext<IPrivateContext | undefined>(undefined);

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
