import React, { createContext, FC, useState } from 'react';
import api from '../services/brainCloudClient';

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
  state: TAuthState;
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
  const [state, setState] = useState<TAuthState>('login');

  const onAuth = () => {
    api.identity.getIdentities((result) => {
      if ('data' in result) {
        setState(result.data.identities.Universal ? 'authenticated' : 'setUsername');
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
        setState('emailSent');
      }
    });
  };
  const setUsername = ({ username }: ISetUsername) => {
    api.identity.attachNonLoginUniversalId(username, (result) => {
      if ('data' in result) {
        setState('authenticated');
      }
    });
  };
  const logout = () => {
    api.playerState.logout((result) => {
      if ('data' in result) {
        setState('login');
      }
    });
  };
  const goToLogin = () => {
    if (state !== 'authenticated') {
      setState('login');
    }
  };
  const goToCreateAccount = () => {
    if (state !== 'authenticated') {
      setState('createAccount');
    }
  };
  const goToForgotPassword = () => {
    if (state !== 'authenticated') {
      setState('forgotPassword');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
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
