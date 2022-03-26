import { FC, useMemo } from 'react';
import CreateAccount from './CreateAccount';
import Entry from './Entry';
import Login from './Login';
import { usePublic } from './Public.Utils';
import ResetPassword from './ResetPassword';

const Component: FC = () => {
  const { view } = usePublic();

  const View = useMemo(() => {
    switch (view) {
      case 'entry':
        return Entry;
      case 'login':
        return Login;
      case 'createAccount':
        return CreateAccount;
      case 'resetPassword':
        return ResetPassword;
    }
  }, [view]);

  return <View />;
};

export default Component;
