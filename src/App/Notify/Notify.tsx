import Notification from 'core/components/Notification';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import useNotifyUtils from './Notify.utils';

const Component: FC = () => {
  const { notify, clearNotify } = useNotifyUtils();

  if (notify === undefined) {
    return null;
  }

  const { titleCode, messageCode } = notify;
  return (
    <Notification titleCode={titleCode} onOutsideClick={clearNotify}>
      <FormattedMessage id={`code.${messageCode}`} />
    </Notification>
  );
};

export default Component;
