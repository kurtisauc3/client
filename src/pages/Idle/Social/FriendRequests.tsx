import HighlightButton from 'core/components/HighlightButton';
import { useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 400px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;
const RequestContainer = styled(HighlightButton)`
  width: 100%;
`;

const Component: FC = () => {
  const { friendRequests } = useAppSelector((state) => state.idle);
  return (
    <Container>
      <Title>
        <FormattedMessage id="friendRequests" /> ({friendRequests.length})
      </Title>
      {friendRequests.map((friendRequest, index) => (
        <RequestContainer key={index}></RequestContainer>
      ))}
    </Container>
  );
};

export default Component;
