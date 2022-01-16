import { WHITE } from 'core/components/Colors';
import idle from 'core/services/idle';
import { useAppDispatch } from 'core/services/store';
import React, { FC } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TitleContainer = styled.div`
  color: ${WHITE};
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
  const dispatch = useAppDispatch();
  const { showModal } = idle.actions;
  return (
    <Container>
      <TitleContainer>
        <FormattedMessage id="social" />
      </TitleContainer>
      <ButtonContainer>
        <FaUserPlus
          onClick={() => {
            dispatch(showModal('addFriends'));
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Component;
