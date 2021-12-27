import { useEffect, useState } from 'react';
import api from '../services/brainCloudClient';

const useErrorCode: () => [number | undefined, () => void] = () => {
  const [errorCode, _setErrorCode] = useState<number>();
  useEffect(() => {
    api.setErrorCallback((data) => {
      console.log(data);
      _setErrorCode(data.reason_code);
    });
  }, []);
  const clearError = () => _setErrorCode(undefined);
  return [errorCode, clearError];
};

export default useErrorCode;
