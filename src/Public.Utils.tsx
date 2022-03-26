import { useApp } from 'App.Utils';
import { createContext, FC, useCallback, useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface IEntryForm {
  username: string;
}
export interface ILoginForm {
  password: string;
}

interface IPublicContext {
  view: 'entry' | 'login' | 'createAccount' | 'resetPassword';
  username: string;
  onEntrySubmit: SubmitHandler<IEntryForm>;
  onLoginSubmit: SubmitHandler<ILoginForm>;
}

const PublicContext = createContext<IPublicContext | undefined>(undefined);
const usePublic = () => {
  const context = useContext(PublicContext);
  if (context === undefined) {
    throw new Error('usePublic must be used within an PublicProvider');
  }
  return context;
};
const PublicProvider: FC = (props) => {
  const { login } = useApp();
  const [view, setView] = useState<IPublicContext['view']>('entry');
  const [username, setUsername] = useState<IPublicContext['username']>('');
  const onEntrySubmit = useCallback<IPublicContext['onEntrySubmit']>(
    (data) => {
      setUsername(data.username);
      setView('login');
    },
    [setView]
  );
  const onLoginSubmit = useCallback<IPublicContext['onLoginSubmit']>(
    ({ password }) => {
      login({ username, password });
    },
    [login, username]
  );
  return (
    <PublicContext.Provider value={{ view, username, onEntrySubmit, onLoginSubmit }} {...props} />
  );
};

export { PublicProvider, usePublic };
