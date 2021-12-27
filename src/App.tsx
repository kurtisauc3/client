import { AppContext } from 'core/providers/App';
import Authentication from 'pages/Authentication';
import Idle from 'pages/Idle';
import { FC, useContext } from 'react';

const Component: FC = () => {
  const { appState } = useContext(AppContext);

  switch (appState) {
    case 'authentication':
      return <Authentication />;
    case 'idle':
      return <Idle />;
  }
};

export default Component;
