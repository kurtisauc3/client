import { createContext, FC, useContext, useEffect, useState } from 'react';
import api from 'services/api';
import electron from 'services/electron';

interface INetworkContext {
  loading: boolean;
  error?: number;
  clearError: () => void;
}

const NetworkContext = createContext<INetworkContext>({
  loading: false,
  clearError: () => {}
});

const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within an NetworkProvider');
  }
  return context;
};

const NetworkProvider: FC = (props) => {
  const [error, setError] = useState<INetworkContext['error']>();
  const [loading, setLoading] = useState<INetworkContext['loading']>(false);

  const clearError = () => setError(undefined);

  useEffect(() => {
    const requestPending = (_: Electron.IpcRendererEvent, loading: boolean) => {
      setLoading(loading);
    };
    electron.ipcRenderer.on('requestPending', requestPending);
    return () => {
      electron.ipcRenderer.off('requestPending', requestPending);
    };
  });

  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      setError(reason_code);
    });
  });

  return <NetworkContext.Provider value={{ loading, error, clearError }} {...props} />;
};

export { NetworkProvider, useNetwork };
