import React, { FC } from 'react';
import styled from 'styled-components';
import Border from './Border';
import Colors from './Colors';

const Container = styled.div`
  margin: 0 40px;
  opacity: 1;
  text-align: center;
  color: ${Colors.TAN};
  cursor: pointer;
  &.active {
    opacity: 0.4;
    cursor: default;
  }
`;

const TextContainer = styled.div`
  font-size: 20px;
  margin: 0 50px;
`;

const Component: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <Container {...rest}>
      <Border>
        <TextContainer>{children}</TextContainer>
      </Border>
    </Container>
  );
};

export default Component;
