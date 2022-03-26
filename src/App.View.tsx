import { FC, useMemo } from 'react';
import { useApp } from './App.Utils';
import Private from './Private';
import Public from './Public';

const Component: FC = () => {
  const { view } = useApp();
  const View = useMemo(() => {
    switch (view) {
      case 'public':
        return Public;
      case 'private':
        return Private;
    }
  }, [view]);
  return <View />;
};

export default Component;
