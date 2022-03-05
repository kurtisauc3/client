import { FC } from 'react';
import { IdleProvider } from './Idle.Utils';
import IdleView from './Idle.View';

const Component: FC = () => {
  return (
    <IdleProvider>
      <IdleView />
    </IdleProvider>
  );
};

export default Component;
