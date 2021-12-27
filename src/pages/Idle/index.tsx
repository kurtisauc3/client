import React, { FC } from 'react';
import styled from 'styled-components';
import BodyContent from './BodyContent';
import BodyHeader from './BodyHeader';
import SocialContent from './SocialContent';
import SocialHeader from './SocialHeader';

const HEADER_HEIGHT = '80px';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;
const BodyContainer = styled.div`
  flex-grow: 1;
  :first-child {
    height: ${HEADER_HEIGHT};
  }
`;
const BodyHeaderContainer = styled(BodyHeader)`
  height: ${HEADER_HEIGHT};
`;
const SocialContainer = styled.div`
  width: 200px;
  :first-child {
    height: ${HEADER_HEIGHT};
  }
`;
const SocialHeaderContainer = styled(SocialHeader)`
  height: ${HEADER_HEIGHT};
`;

const Component: FC = () => {
  return (
    <Container>
      <BodyContainer>
        <BodyHeaderContainer />
        <BodyContent />
      </BodyContainer>
      <SocialContainer>
        <SocialHeaderContainer />
        <SocialContent />
      </SocialContainer>
    </Container>
  );
};

export default Component;
