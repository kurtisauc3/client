import React, { createContext, FC, useState } from 'react';
import api from '../services/brainCloudClient';

export interface ILogin {
  username: string;
  password: string;
}

export interface IForgotPassword {
  username: string;
}

interface IAuthContext {
  authenticated: boolean;
  login: (data: ILogin) => void;
  createAccount: (data: ILogin) => void;
  forgotPassword: (data: IForgotPassword) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = ({ username, password }: ILogin) => {
    api.authentication.authenticateUniversal(username, password, false, (result) => {
      if ('data' in result) {
        setAuthenticated(true);
      }
    });
  };

  const createAccount = ({ username, password }: ILogin) => {
    api.authentication.authenticateUniversal(username, password, true, (result) => {
      if ('data' in result) {
        setAuthenticated(true);
      }
    });
  };
  const forgotPassword = ({ username }: IForgotPassword) => {
    console.log(api);
    api.authentication.resetUniversalIdPassword(username, (result) => {
      if ('data' in result) {
        // email sent
      }
    });
  };
  const logout = () => {
    api.playerState.logout((result) => {
      if ('data' in result) {
        setAuthenticated(false);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        createAccount,
        forgotPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
