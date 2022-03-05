import { FC } from 'react';
import { PublicProvider } from './Public.Utils';
import PublicView from './Public.View';

const Component: FC = () => {
  return (
    <PublicProvider>
      <PublicView />
    </PublicProvider>
  );
};

export default Component;
