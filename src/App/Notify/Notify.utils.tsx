import useEnterKey from 'core/hooks/useEnterKey';
import client from 'core/redux/client';
import { useAppDispatch, useAppSelector } from 'core/redux/store';
import api from 'core/services/api';
import { useEffect } from 'react';

const useErrorUtils = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppSelector((state) => state.client);
  const clearNotify = () => dispatch(client.actions.setNotify(undefined));
  useEnterKey(clearNotify);

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      dispatch(client.actions.setNotify({ titleCode: 'error', messageCode: reason_code }));
    });
  });

  return { notify, clearNotify };
};

export default useErrorUtils;
