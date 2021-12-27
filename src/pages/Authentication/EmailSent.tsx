import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  padding: 20px;
`;

const Component: FC = () => {
  return (
    <Container>
      <MessageContainer>
        <FormattedMessage id="emailSentMessage" />
      </MessageContainer>
    </Container>
  );
};

export default Component;
