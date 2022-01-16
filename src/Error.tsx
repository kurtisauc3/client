import Border from 'core/components/Border';
import { TAN, WHITE } from 'core/components/Colors';
import Overlay from 'core/components/Overlay';
import api from 'core/services/api';
import network from 'core/services/network';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import user from 'core/services/user';
import React, { FC, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const BorderContainer = styled(Border)`
  min-width: 300px;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${WHITE};
  text-align: center;
  margin: 10px 0;
`;
const ErrorContainer = styled.div`
  color: ${TAN};
  text-align: center;
  margin: 10px 0;
`;

const Component: FC = () => {
  const { errorCode } = useAppSelector((state) => state.network);
  const dispatch = useAppDispatch();
  const { goTo } = user.actions;
  const { setErrorCode, clearErrorCode } = network.actions;

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      switch (reason_code) {
        case 40304: // logged out
          dispatch(goTo('auth'));
          break;
        default:
          dispatch(setErrorCode(reason_code));
          break;
      }
    });
  });

  if (!errorCode) {
    return null;
  }

  return (
    <Overlay
      onClick={() => {
        dispatch(clearErrorCode());
      }}
    >
      <BorderContainer>
        <Title>
          <FormattedMessage id="error" />
        </Title>
        <ErrorContainer>
          <FormattedMessage id={`error.${errorCode}`} />
        </ErrorContainer>
      </BorderContainer>
    </Overlay>
  );
};

export default Component;
