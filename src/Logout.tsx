import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';

const Component: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          api.playerState.logout((result) => {
            if ('data' in result) {
              navigate('/login');
            }
          });
        }}
      >
        <FormattedMessage id="logout" />
      </button>
    </div>
  );
};

export default Component;
