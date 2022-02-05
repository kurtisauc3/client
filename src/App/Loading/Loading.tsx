import loadingUrl from 'assets/images/loading.gif';
import Overlay from 'core/components/Overlay';
import React, { FC } from 'react';
import { LoadingContainer } from './Loading.styles';
import useLoadingUtils from './Loading.utils';

const Component: FC = () => {
  const { isLoading } = useLoadingUtils();

  if (!isLoading) {
    return null;
  }

  return (
    <Overlay style={{ zIndex: 1000 }}>
      <LoadingContainer>
        <img alt="loading" src={loadingUrl} />
      </LoadingContainer>
    </Overlay>
  );
};

export default Component;
