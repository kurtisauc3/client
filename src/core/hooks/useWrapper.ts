import { useCallback, useEffect, useState } from 'react';

interface IProps {}
interface IUseWrapper {}
/**
 * automatically calls the load function on mount, and when the request changes
 * @param props props for the loader hook
 * @returns the loader return object, with loading, error, setRequest, response, and refresh methods
 */
export const useWrapper = (props: IProps): IUseWrapper => {
  const { load, defaultRequest, defaultResponse, callback } = props;
  const [loading, _setLoading] = useState(true);
  const [_success, _setSuccess] = useState(false);
  const [errorCode, _setErrorCode] = useState<number>();
  const [request, setRequest] = useState(defaultRequest);
  const [response, _setResponse] = useState(defaultResponse);
  const deps = loadDeps || [];
  /**
   * refresh the data
   */
  const refresh = useCallback(async () => {
    try {
      _setLoading(true);
      _setSuccess(false);
      const res = await load(request);
      _setResponse(res);
      _setSuccess(true);
    } catch (err) {
      _setError(String(err));
    } finally {
      _setLoading(false);
    }
  }, [...[request], ...deps]);
  /**
   * load the data when request is updated
   */
  useEffect(() => {
    refresh();
  }, [request, ...deps]);

  useEffect(() => {
    if (loading) {
      _setError(null);
    }
  }, [loading]);

  useEffect(() => {
    if (_success && callback) {
      callback(response, refresh);
    }
  }, [_success, response]);

  return {
    loading,
    error,
    setRequest,
    response,
    refresh
  };
};
