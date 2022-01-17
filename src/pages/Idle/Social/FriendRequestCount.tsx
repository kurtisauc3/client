import { DARK_PURPLE, YELLOW } from 'core/components/Colors';
import HighlightButton from 'core/components/HighlightButton';
import idle from 'core/services/idle';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled(HighlightButton)`
  width: 100%;
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
  const dispatch = useAppDispatch();
  const { showModal } = idle.actions;
  const { friendRequests } = useAppSelector((state) => state.idle);

  if (friendRequests.length === 0) {
    return null;
  }

  return (
    <Container
      onClick={() => {
        dispatch(showModal('friendRequests'));
      }}
    >
      <FormattedMessage id="friendRequests" />
      <CountContainer>{friendRequests.length}</CountContainer>
    </Container>
  );
};

export default Component;
