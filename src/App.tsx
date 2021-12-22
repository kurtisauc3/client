import { FC, useContext } from 'react';
import { AuthContext } from './core/providers/Auth';
import Unauthenticated from './pages/Unauthenticated';
import Authenticated from './pages/Authenticated';

const Component: FC = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? <Authenticated /> : <Unauthenticated />;
};

export default Component;
