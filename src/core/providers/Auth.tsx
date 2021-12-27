import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import api from '../services/brainCloudClient';
import { AppContext } from './App';

export interface ICreateAccount {
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface ISetUsername {
  username: string;
}

type TAuthState =
  | 'login'
  | 'createAccount'
  | 'forgotPassword'
  | 'emailSent'
  | 'setUsername'
  | 'authenticated';

interface IAuthContext {
  authState: TAuthState;
  goToLogin: () => void;
  goToCreateAccount: () => void;
  goToForgotPassword: () => void;
  login: (data: ILogin) => void;
  createAccount: (data: ICreateAccount) => void;
  forgotPassword: (data: IForgotPassword) => void;
  setUsername: (data: ISetUsername) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const { setAppState } = useContext(AppContext);
  const [authState, setAuthState] = useState<TAuthState>('login');

  useEffect(() => {
    if (authState === 'authenticated') {
      setAppState('idle');
    } else {
      setAppState('authentication');
    }
  }, [authState]);

  const onAuth = () => {
    api.identity.getIdentities((result) => {
      if ('data' in result) {
        if (result.data.identities.Universal) {
          setAuthState('authenticated');
        } else {
          setAuthState('setUsername');
        }
      }
    });
  };

  const login = ({ email, password }: ILogin) => {
    api.authentication.authenticateEmailPassword(email, password, false, (result) => {
      if ('data' in result) {
        onAuth();
      }
    });
  };

  const createAccount = ({ email, password }: ICreateAccount) => {
    api.authentication.authenticateEmailPassword(email, password, true, (result) => {
      if ('data' in result) {
        onAuth();
      }
    });
  };
  const forgotPassword = ({ email }: IForgotPassword) => {
    api.authentication.resetEmailPassword(email, (result) => {
      if ('data' in result) {
        setAuthState('emailSent');
      }
    });
  };
  const setUsername = ({ username }: ISetUsername) => {
    api.identity.attachNonLoginUniversalId(username, (result) => {
      if ('data' in result) {
        setAuthState('authenticated');
      }
    });
  };

  const logout = () => {
    api.playerState.logout((result) => {
      if ('data' in result) {
        setAuthState('login');
      }
    });
  };
  const goToLogin = () => {
    setAuthState('login');
  };
  const goToCreateAccount = () => {
    setAuthState('createAccount');
  };
  const goToForgotPassword = () => {
    setAuthState('forgotPassword');
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        goToLogin,
        goToCreateAccount,
        goToForgotPassword,
        login,
        createAccount,
        forgotPassword,
        setUsername,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
