import { DARK_PURPLE } from 'core/components/Colors';
import Nav from 'core/components/Nav';
import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled(Nav)`
  background-color: ${DARK_PURPLE + 'CC'};
`;

const Component: FC = () => {
  return <Container>ProfileCard</Container>;
};

export default Component;
