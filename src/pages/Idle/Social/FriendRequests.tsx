import Avatar from 'core/components/Avatar';
import HighlightButton from 'core/components/HighlightButton';
import { useAppSelector } from 'core/services/store';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 400px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;
const RequestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PictureContainer = styled.div`
  height: 80px;
  width: 80px;
`;
const Name = styled.div`
  flex-grow: 1;
`;
const ActionButton = styled(HighlightButton)`
  padding: 4px 8px;
  margin: 0 4px;
`;

const Component: FC = () => {
  const { friendRequests } = useAppSelector((state) => state.idle);
  return (
    <Container>
      <Title>
        <FormattedMessage id="friendRequests" /> ({friendRequests.length})
      </Title>
      {friendRequests.map((friendRequest, index) => (
        <RequestContainer key={index}>
          <PictureContainer>
            <Avatar src={friendRequest.eventData.summaryData.pictureUrl} />
          </PictureContainer>
          <Name>{friendRequest.eventData.summaryData.profileName}</Name>
          <ActionButton onClick={() => {}}>
            <FormattedMessage id="accept" />
          </ActionButton>
          <ActionButton onClick={() => {}}>
            <FormattedMessage id="decline" />
          </ActionButton>
        </RequestContainer>
      ))}
    </Container>
  );
};

export default Component;
