import React, { FC } from 'react';
import styled from 'styled-components';
import { BLACK, DARK_PURPLE, LIGHT_PURPLE, TAN } from './Colors';

const OuterTan = styled.div`
  margin: 0 40px;
  background-color: ${TAN};
  padding: 2px;
  opacity: 1;
  font-size: 20px;
  cursor: pointer;
  &.active {
    opacity: 0.4;
    cursor: default;
  }
`;
const InnerBlack = styled.div`
  background-color: ${BLACK};
  padding: 3px;
`;

const InnerLightPurple = styled.div`
  background-color: ${LIGHT_PURPLE};
  padding: 2px;
`;

const InnerDarkPurple = styled.div`
  background-color: ${DARK_PURPLE};
  padding: 2px;
`;

const TextContainer = styled.div`
  background-color: ${DARK_PURPLE};
  margin: 0 50px;
`;

const Component: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <OuterTan {...rest}>
      <InnerBlack>
        <InnerLightPurple>
          <InnerDarkPurple>
            <TextContainer>{children}</TextContainer>
          </InnerDarkPurple>
        </InnerLightPurple>
      </InnerBlack>
    </OuterTan>
  );
};

export default Component;
