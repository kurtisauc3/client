import { createContext, FC, useContext, useState } from 'react';

type TAppState =
  | {
      view: 'public';
    }
  | {
      view: 'private';
    };

interface IAppContext {
  state: TAppState;
  setState: React.Dispatch<TAppState>;
}

const AppContext = createContext<IAppContext>({
  state: {
    view: 'public'
  },
  setState: () => {}
});

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const AppProvider: FC = (props) => {
  // TODO: app provider
  const [state, setState] = useState<IAppContext['state']>({
    view: 'public'
  });

  return <AppContext.Provider value={{ state, setState }} {...props} />;
};

export { AppProvider, useApp };
