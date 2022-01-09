import React, { FC } from 'react';
import styled from 'styled-components';
import { WHITE } from './Colors';

const Container = styled.button`
  cursor: pointer;
  &.active,
  &:hover {
    background-image: linear-gradient(to top, ${WHITE + '33'}, ${WHITE + '00'});
  }
`;

const Component: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
};

export default Component;
