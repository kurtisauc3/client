import { AuthContext } from 'core/providers/Auth';
import Authentication from 'pages/Authentication';
import Idle from 'pages/Idle';
import { FC, useContext } from 'react';

const Component: FC = () => {
  const { state } = useContext(AuthContext);
  return state === 'authenticated' ? <Idle /> : <Authentication />;
};

export default Component;
