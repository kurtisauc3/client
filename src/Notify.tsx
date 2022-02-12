import React, { FC, useCallback, useEffect } from 'react';
import api from 'services/api';
import { useAppDispatch, useAppSelector } from 'store';
import client from 'store/client';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppSelector((state) => state.client);
  const clearNotify = useCallback(() => dispatch(client.actions.clearNotify()), [dispatch]);

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      dispatch(client.actions.setNotify({ type: 'error', messageCode: reason_code }));
    });
  });

  return (
    <>
      {notify && (
        <>
          <div>type: {notify.type}</div>
          <div>messageCode: {notify.messageCode}</div>
          <div>
            <button type="button" onClick={clearNotify}>
              clear notify
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Component;
