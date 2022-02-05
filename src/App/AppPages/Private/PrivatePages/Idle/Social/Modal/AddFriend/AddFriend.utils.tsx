import client from 'core/redux/client';
import { useAppDispatch } from 'core/redux/store';
import api from 'core/services/api';
import { CustomSuccessCode } from 'core/types/enums';
import React, { useCallback, useState } from 'react';

const useAddFriendUtils = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      api.script.runScript('sendFriendRequest', { username }, (result) => {
        if ('data' in result) {
          if (result.data.response.custom_error) {
            dispatch(
              client.actions.setNotify({
                titleCode: 'error',
                messageCode: result.data.response.custom_error
              })
            );
          } else {
            dispatch(
              client.actions.setNotify({
                titleCode: 'success',
                messageCode: CustomSuccessCode.FriendRequestSent
              })
            );
            setUsername('');
          }
        }
      });
    },
    [username, setUsername, dispatch]
  );
  return { username, setUsername, handleSubmit };
};

export default useAddFriendUtils;
