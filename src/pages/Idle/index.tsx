import React, { FC } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Social from './Social';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const Component: FC = () => {
  return (
    <Container>
      <Body />
      <Social />
    </Container>
  );
};

export default Component;
