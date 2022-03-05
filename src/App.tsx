import { FC } from 'react';
import { AppProvider } from './App.Utils';
import AppView from './App.View';

const Component: FC = () => {
  return (
    <AppProvider>
      <AppView />
    </AppProvider>
  );
};

export default Component;
