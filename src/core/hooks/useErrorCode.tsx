import { useEffect, useState } from 'react';
import api from '../services/api';
import useMountedState from './useMountedState';

const useErrorCode: () => [number | undefined, () => void] = () => {
  const [errorCode, _setErrorCode] = useState<number>();
  const isMounted = useMountedState();
  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      if (isMounted()) {
        _setErrorCode(reason_code);
      }
    });
  }, [isMounted]);
  const clearError = () => _setErrorCode(undefined);
  return [errorCode, clearError];
};

export default useErrorCode;
