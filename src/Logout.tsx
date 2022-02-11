import React, { FC, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';

const Component: FC = () => {
  const navigate = useNavigate();
  const logout = useCallback(
    () =>
      api.playerState.logout((result) => {
        if ('data' in result) {
          navigate('/authenticate');
        }
      }),
    [navigate]
  );

  return (
    <div>
      <button type="button" onClick={logout}>
        <FormattedMessage id="logout" />
      </button>
    </div>
  );
};

export default Component;
