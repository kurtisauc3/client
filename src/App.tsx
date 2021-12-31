import { useAppSelector } from 'core/services/store';
import Auth from 'pages/Auth';
import Idle from 'pages/Idle';
import { FC } from 'react';

const Component: FC = () => {
  const view = useAppSelector((state) => state.user.view);

  switch (view) {
    case 'auth':
      return <Auth />;
    case 'idle':
      return <Idle />;
  }
};

export default Component;
