import { createContext, FC, useContext, useState } from 'react';

type TPublicState =
  | {
      view: 'entry';
      username: string;
    }
  | {
      view: 'login';
      username: string;
      password: string;
    }
  | {
      view: 'createAccount';
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
    }
  | {
      view: 'resetPassword';
      email: string;
    };

interface IPublicContext {
  state: TPublicState;
  setState: React.Dispatch<TPublicState>;
  checkUniversalId: () => void;
  resetPassword: () => void;
}

const PublicContext = createContext<IPublicContext>({
  state: {
    view: 'entry',
    username: ''
  },
  setState: () => {},
  checkUniversalId: () => {},
  resetPassword: () => {}
});

const usePublic = () => {
  const context = useContext(PublicContext);
  if (context === undefined) {
    throw new Error('usePublic must be used within an PublicProvider');
  }
  return context;
};

const PublicProvider: FC = (props) => {
  // TODO: public provider
  const [state, setState] = useState<IPublicContext['state']>({
    view: 'entry',
    username: ''
  });
  const checkUniversalId: IPublicContext['checkUniversalId'] = () => {};
  const resetPassword: IPublicContext['resetPassword'] = () => {};

  return (
    <PublicContext.Provider
      value={{ state, setState, checkUniversalId, resetPassword }}
      {...props}
    />
  );
};

export { PublicProvider, usePublic };
