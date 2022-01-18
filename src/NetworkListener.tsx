import loading from 'assets/images/loading.gif';
import Overlay from 'core/components/Overlay';
import electron from 'core/services/electron';
import network from 'core/services/network';
import { useAppDispatch, useAppSelector } from 'core/services/store';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100px;
  height: 100px;
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;

const Component: FC = () => {
  const { view } = useAppSelector((state) => state.network);
  const dispatch = useAppDispatch();
  const { goTo } = network.actions;

  useEffect(() => {
    electron.ipcRenderer.on('requestPending', (event, pending: boolean) => {
      dispatch(goTo(pending ? 'loading' : 'hidden'));
    });
  });

  if (view === 'hidden') {
    return null;
  }

  return (
    <Overlay>
      <LoadingContainer>
        <img alt="loading" src={loading} />
      </LoadingContainer>
    </Overlay>
  );
};

export default Component;
