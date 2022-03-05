import { FC } from 'react';
import { useApp } from './App.Utils';
import Private from './Private';
import Public from './Public';

const Component: FC = () => {
  const { state } = useApp();

  switch (state.view) {
    case 'public':
      return <Public />;
    case 'private':
      return <Private />;
  }
};

export default Component;
