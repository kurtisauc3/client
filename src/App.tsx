import { AppContext } from 'core/providers/App';
import AuthProvider from 'core/providers/Auth';
import IdleProvider from 'core/providers/Idle';
import Authentication from 'pages/Authentication';
import Idle from 'pages/Idle';
import { FC, useContext } from 'react';

const Component: FC = () => {
  const { appState } = useContext(AppContext);

  switch (appState) {
    case 'authentication':
      return (
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      );
    case 'idle':
      return (
        <IdleProvider>
          <Idle />
        </IdleProvider>
      );
  }
};

export default Component;
