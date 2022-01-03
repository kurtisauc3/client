import { useEffect, useState } from 'react';
import api from '../services/api';

const useErrorCode: () => [number | undefined, () => void] = () => {
  const [errorCode, _setErrorCode] = useState<number>();
  useEffect(() => {
    let unmounted = false;
    api.setErrorCallback(({ reason_code }) => {
      if (!unmounted) {
        _setErrorCode(reason_code);
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);
  const clearError = () => _setErrorCode(undefined);
  return [errorCode, clearError];
};

export default useErrorCode;
