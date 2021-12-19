import { FC, useContext } from 'react';
import { UserStateContext } from './core/providers/UserState';
import Login from './pages/Login';
import Idle from './pages/Idle';
import Lobby from './pages/Lobby';
import Room from './pages/Room';
import Results from './pages/Results';

const Component: FC = () => {
  const { userState } = useContext(UserStateContext);
  switch (userState) {
    case 'login':
      return <Login />;
    case 'idle':
      return <Idle />;
    case 'lobby':
      return <Lobby />;
    case 'room':
      return <Room />;
    case 'results':
      return <Results />;
  }
};

export default Component;
