import Colors from 'core/components/Colors';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  * {
    color: ${Colors.TAN};
    letter-spacing: 2px;
  }
`;
export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const SocialContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
`;
