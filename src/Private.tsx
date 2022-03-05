import { FC } from 'react';
import { PrivateProvider } from './Private.Utils';
import PrivateView from './Private.View';

const Component: FC = () => {
  return (
    <PrivateProvider>
      <PrivateView />
    </PrivateProvider>
  );
};

export default Component;
