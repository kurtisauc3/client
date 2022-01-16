import styled from 'styled-components';
import { WHITE } from './Colors';

const Container = styled.button`
  cursor: pointer;
  &.active,
  &:hover {
    background-image: linear-gradient(to top, ${WHITE + '33'}, ${WHITE + '00'});
  }
`;

export default Container;
