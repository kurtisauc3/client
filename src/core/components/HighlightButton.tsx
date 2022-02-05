import styled from 'styled-components';
import Colors from './Colors';

const Container = styled.button`
  cursor: pointer;
  &.active,
  &:hover {
    background-image: linear-gradient(to top, ${Colors.WHITE + '33'}, ${Colors.WHITE + '00'});
  }
`;

export default Container;
