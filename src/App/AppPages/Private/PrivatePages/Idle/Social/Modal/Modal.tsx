import Modal from 'core/components/Modal';
import React, { FC } from 'react';
import { useSocialModal } from '../Social.utils';
import useModalUtils from './Modal.utils';

const Component: FC = () => {
  const { modal, setModal } = useSocialModal();
  const { renderBody } = useModalUtils(modal);

  if (modal === undefined) {
    return null;
  }

  return <Modal onCloseClick={() => setModal(undefined)}>{renderBody()}</Modal>;
};

export default Component;
