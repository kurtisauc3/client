import { useAppDispatch } from 'core/redux/store';
import user from 'core/redux/user';
import api from 'core/services/api';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoginUtils = () => {
  const version = api.getAppVersion();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('kurtistrainor@gmail.com');
  const [password, setPassword] = useState('kurtistrainor@gmail.com');
  const [forceCreate, setForceCreate] = useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      api.authentication.authenticateUniversal(username, password, forceCreate, (result) => {
        if ('data' in result) {
          dispatch(user.actions.setEvents(result.data.incoming_events));
          navigate('/');
        }
      });
    },
    [username, password, forceCreate, dispatch, navigate]
  );

  return {
    version,
    username,
    setUsername,
    password,
    setPassword,
    forceCreate,
    setForceCreate,
    handleSubmit
  };
};

export default useLoginUtils;
