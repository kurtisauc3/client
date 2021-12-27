import React, { FC } from 'react';
import styled from 'styled-components';
import loading from '../../assets/images/loading.gif';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 100px;
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;

const Component: FC = () => {
  return (
    <Container>
      <LoadingContainer>
        <img alt="loading" src={loading} />
      </LoadingContainer>
    </Container>
  );
};

export default Component;
