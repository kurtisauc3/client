import { FC, useMemo } from 'react';
import Game from './Game';
import Idle from './Idle';
import { usePrivate } from './Private.Utils';
import Results from './Results';
import Room from './Room';

const Component: FC = () => {
  const { state } = usePrivate();

  const View: React.FC = useMemo(() => {
    switch (state.view) {
      case 'idle':
        return Idle;
      case 'room':
        return Room;
      case 'game':
        return Game;
      case 'results':
        return Results;
    }
  }, [state.view]);

  return <View />;
};

export default Component;
