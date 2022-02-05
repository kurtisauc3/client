import Colors from 'core/components/Colors';
import React, { FC } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useSocialModal } from './Social.utils';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TitleContainer = styled.div`
  color: ${Colors.WHITE};
`;
const ButtonContainer = styled.div`
  svg {
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
`;

const Component: FC = () => {
  const { setModal } = useSocialModal();
  return (
    <Container>
      <TitleContainer>
        <FormattedMessage id="social" />
      </TitleContainer>
      <ButtonContainer>
        <FaUserPlus
          onClick={() => {
            setModal('addFriend');
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Component;
