import HeaderContainer from 'components/HeaderContainer';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import Game from './Game';
import Idle from './Idle';
import { usePrivate } from './Private.Utils';
import ProfileCard from './ProfileCard';
import Results from './Results';
import Room from './Room';

const Container = styled.div`
  flex: 1;
`;
const SocialContainer = styled.div`
  width: 300px;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
`;
const FriendContainer = styled.div`
  flex: 1;
`;
const StateContainer = styled.div`
  flex: 1;
`;

const Component: FC = () => {
  const { state } = usePrivate();

  const StateView: React.FC = useMemo(() => {
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

  return (
    <Container>
      <StateContainer>
        <StateView />
      </StateContainer>
      <SocialContainer>
        <HeaderContainer>
          <ProfileCard />
        </HeaderContainer>
        <FriendContainer>
          <Friend />
        </FriendContainer>
      </SocialContainer>
    </Container>
  );
};

export default Component;
