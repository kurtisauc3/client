import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Component: FC = (props) => {
  return <Container {...props}>BodyHeader</Container>;
};

export default Component;
