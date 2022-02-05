import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from './Colors';

const Container = styled.div`
  background-color: ${Colors.TAN};
  padding: 2px;
`;

const InnerBlack = styled.div`
  background-color: ${Colors.BLACK};
  padding: 3px;
`;

const InnerLightPurple = styled.div`
  background-color: ${Colors.LIGHT_PURPLE};
  padding: 2px;
`;

const InnerDarkPurple = styled.div`
  background-color: ${Colors.DARK_PURPLE};
  padding: 2px;
`;

const Content = styled.div`
  background-color: ${Colors.DARK_PURPLE};
`;

const Component: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <Container {...rest}>
      <InnerBlack>
        <InnerLightPurple>
          <InnerDarkPurple>
            <Content>{children}</Content>
          </InnerDarkPurple>
        </InnerLightPurple>
      </InnerBlack>
    </Container>
  );
};

export default Component;
