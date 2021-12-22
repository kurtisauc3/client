import React, { createContext, FC, useCallback, useState } from 'react';
import api from '../services/brainCloudClient';

interface IAuthContext {
  authenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = useCallback(
    (username: string, password: string) => {
      if (!authenticated) {
        api.authentication.authenticateUniversal(username, password, false, (result) => {
          if ('data' in result) {
            setAuthenticated(true);
          }
        });
      }
    },
    [authenticated]
  );
  const logout = useCallback(() => {
    // if (authenticated) {
    api.playerState.logout((result) => {
      if ('data' in result) {
        setAuthenticated(false);
      }
    });
    // }
  }, [authenticated]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
