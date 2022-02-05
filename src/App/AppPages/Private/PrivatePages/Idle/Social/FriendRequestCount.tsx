import Colors from 'core/components/Colors';
import HighlightButton from 'core/components/HighlightButton';
import { useAppSelector } from 'core/redux/store';
import { selectFriendRequests } from 'core/redux/user';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useSocialModal } from './Social.utils';

const Container = styled(HighlightButton)`
  width: 100%;
  padding: 10px;
  color: ${Colors.YELLOW}!important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

const CountContainer = styled.div`
  position: relative;
  background-color: ${Colors.YELLOW}!important;
  border-radius: 4px;
  padding: 2px 6px 1px 9px;
  color: ${Colors.DARK_PURPLE}!important;
`;

const Component: FC = () => {
  const { setModal } = useSocialModal();
  const friendRequests = useAppSelector(selectFriendRequests);

  if (!friendRequests || friendRequests.length === 0) {
    return null;
  }

  return (
    <Container
      onClick={() => {
        setModal('friendRequests');
      }}
    >
      <FormattedMessage id="friendRequests" />
      <CountContainer>{friendRequests.length}</CountContainer>
    </Container>
  );
};

export default Component;
