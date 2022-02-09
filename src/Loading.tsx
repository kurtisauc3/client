import React, { FC, useEffect, useState } from 'react';
import electron from 'services/electron';

const Component: FC = () => {
  const [status, setStatus] = useState<LoadingStatus>('loaded');

  useEffect(() => {
    const requestPending = (_: Electron.IpcRendererEvent, loading: boolean) => {
      setStatus(loading ? 'loading' : 'loaded');
    };
    electron.ipcRenderer.on('requestPending', requestPending);
    return () => {
      electron.ipcRenderer.off('requestPending', requestPending);
    };
  });

  return (
    <div>
      <div>loading</div>
      <div>value: {status}</div>
    </div>
  );
};

export default Component;
