import { createContext, FC, useCallback, useContext, useState } from 'react';

interface IAppContext {
  view: 'public' | 'private';
  login: (data: { username: string; password: string }) => void;
  logout: () => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);
const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
const AppProvider: FC = (props) => {
  const [view, setView] = useState<IAppContext['view']>('public');
  const login = useCallback<IAppContext['login']>((data) => {
    setView('private');
  }, []);
  const logout = useCallback<IAppContext['logout']>(() => {
    setView('public');
  }, []);
  return <AppContext.Provider value={{ view, login, logout }} {...props} />;
};

export { AppProvider, useApp };
