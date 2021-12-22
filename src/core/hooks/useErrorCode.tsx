import { useEffect, useState } from 'react';
import wrapper from '../services/brainCloudClient';

const useErrorCode: () => [number | undefined, () => void] = () => {
  const [errorCode, _setErrorCode] = useState<number>();
  useEffect(() => {
    wrapper.setErrorCallback(({ reason_code }) => {
      _setErrorCode(reason_code);
    });
  }, []);
  const clearError = () => _setErrorCode(undefined);
  return [errorCode, clearError];
};

export default useErrorCode;
