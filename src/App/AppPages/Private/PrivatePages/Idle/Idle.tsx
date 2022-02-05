import Nav from 'core/components/Nav';
import { FC } from 'react';
import Header from './Header';
import { BodyContainer, Container, SocialContainer } from './Idle.styles';
import IdlePages from './IdlePages';
import ProfileCard from './ProfileCard';
import Social from './Social';

const Component: FC = () => {
  return (
    <Container>
      <BodyContainer>
        <Nav>
          <Header />
        </Nav>
        <IdlePages />
      </BodyContainer>
      <SocialContainer>
        <Nav>
          <ProfileCard />
        </Nav>
        <Social />
      </SocialContainer>
    </Container>
  );
};

export default Component;
