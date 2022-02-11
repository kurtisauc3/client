import React, { FC, useEffect, useState } from 'react';
import electron from 'services/electron';

const Component: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestPending = (_: Electron.IpcRendererEvent, loading: boolean) => {
      setLoading(loading);
    };
    electron.ipcRenderer.on('requestPending', requestPending);
    return () => {
      electron.ipcRenderer.off('requestPending', requestPending);
    };
  });

  return <>{loading && <div>loading</div>}</>;
};

export default Component;
