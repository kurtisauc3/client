import { useEffect, useState } from 'react';
import api from '../services/api';

const useErrorCode: () => [number | undefined, () => void] = () => {
  const [errorCode, _setErrorCode] = useState<number>();
  useEffect(() => {
    api.setErrorCallback(({ reason_code }) => {
      _setErrorCode(reason_code);
    });
  }, []);
  const clearError = () => _setErrorCode(undefined);
  return [errorCode, clearError];
};

export default useErrorCode;
