import electron from 'core/services/electron';
import { useEffect, useState } from 'react';

const useLoadingUtils = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestPending = (_: Electron.IpcRendererEvent, loading: boolean) => {
      setIsLoading(loading);
    };
    electron.ipcRenderer.on('requestPending', requestPending);
    return () => {
      electron.ipcRenderer.off('requestPending', requestPending);
    };
  });
  return { isLoading };
};

export default useLoadingUtils;
