import ActionButton from 'core/components/ActionButton';
import Modal from 'core/components/Modal';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import useConnectingUtils from './Connecting.utils';

const Component: FC = () => {
  const { connect, status } = useConnectingUtils();

  if (status !== 'disconnected') {
    return null;
  }

  return (
    <Modal titleCode="disconnected">
      <ActionButton onClick={connect}>
        <FormattedMessage id="reconnect" />
      </ActionButton>
    </Modal>
  );
};

export default Component;
