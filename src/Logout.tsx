import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import api from 'services/api';

const Component: FC = () => {
  return (
    <div>
      <button type="button" onClick={() => api.playerState.logout()}>
        <FormattedMessage id="logout" />
      </button>
    </div>
  );
};

export default Component;
