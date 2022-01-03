import { DARK_PURPLE } from 'core/components/Colors';
import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to bottom, ${DARK_PURPLE + 'CC'}, ${DARK_PURPLE});
`;

const Component: FC = () => {
  return <Container>Social</Container>;
};

export default Component;
