import { DARK_PURPLE, YELLOW } from 'core/components/Colors';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  color: ${YELLOW}!important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CountContainer = styled.div`
  position: relative;
  background-color: ${YELLOW}!important;
  border-radius: 4px;
  padding: 2px 6px 1px 9px;
  color: ${DARK_PURPLE}!important;
`;

const Component: FC = () => {
  return (
    <Container>
      <FormattedMessage id="friendRequests" />
      <CountContainer>0</CountContainer>
    </Container>
  );
};

export default Component;
