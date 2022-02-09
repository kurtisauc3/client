import React, { FC, useEffect } from 'react';
import api from 'services/api';
import { useAppDispatch, useAppSelector } from 'store';
import client from 'store/client';

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppSelector((state) => state.client);
  const clearNotify = () => dispatch(client.actions.setNotify({ type: 'hidden' }));

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      dispatch(client.actions.setNotify({ type: 'error', messageCode: reason_code }));
    });
  });

  return (
    <>
      <div>notify</div>
      <div>type: {notify.type}</div>
      {'messageCode' in notify && <div>messageCode: {notify.messageCode}</div>}
      <div>
        <button type="button" disabled={notify.type === 'hidden'} onClick={clearNotify}>
          clear notify
        </button>
      </div>
    </>
  );
};

export default Component;
