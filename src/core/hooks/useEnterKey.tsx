import { useCallback, useEffect } from 'react';

const useEnterKey = (callback: () => void) => {
  const onKeyDown: (ev: KeyboardEvent) => void = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });
};

export default useEnterKey;
