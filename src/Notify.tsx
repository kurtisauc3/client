import Border from 'core/components/Border';
import { TAN, WHITE } from 'core/components/Colors';
import Overlay from 'core/components/Overlay';
import api from 'core/services/api';
import network from 'core/services/network';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import user from 'core/services/user';
import React, { FC, useCallback, useEffect } from 'react';
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
const NotifyContainer = styled.div`
  color: ${TAN};
  text-align: center;
  margin: 10px 0;
`;

const Component: FC = () => {
  const { notify } = useAppSelector((state) => state.network);
  const dispatch = useAppDispatch();
  const { goTo } = user.actions;
  const { setNotify, clearNotify } = network.actions;

  const onKeyDown: (ev: KeyboardEvent) => void = useCallback(
    (event) => {
      if (notify && event.key === 'Enter') {
        event.preventDefault();
        dispatch(clearNotify());
      }
    },
    [notify, dispatch, clearNotify]
  );

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      switch (reason_code) {
        case 40304: // logged out
          dispatch(goTo('auth'));
          break;
        default:
          dispatch(setNotify({ type: 'error', code: reason_code }));
          break;
      }
    });

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  if (!notify) {
    return null;
  }

  return (
    <Overlay
      onClick={() => {
        dispatch(clearNotify());
      }}
    >
      <BorderContainer>
        <Title>
          <FormattedMessage id={notify.type} />
        </Title>
        <NotifyContainer>
          <FormattedMessage id={`code.${notify.code}`} />
        </NotifyContainer>
      </BorderContainer>
    </Overlay>
  );
};

export default Component;
