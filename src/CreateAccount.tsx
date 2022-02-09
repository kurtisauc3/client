import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';

type FormValues = {
  username: string;
  password: string;
};

const Component: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(({ username, password }) => {
        api.authentication.authenticateUniversal(username, password, true, (result) => {
          if ('data' in result) {
            navigate('/');
          }
        });
      })}
    >
      <div>
        <label htmlFor="create-account-username">
          <FormattedMessage id="username" />
        </label>
        <input autoFocus id="create-account-username" {...register('username')} />
      </div>
      <div>
        <label htmlFor="create-account-password">
          <FormattedMessage id="password" />
        </label>
        <input id="create-account-password" type="password" {...register('password')} />
      </div>
      <div>
        <button type="submit">
          <FormattedMessage id="createAccount" />
        </button>
      </div>
    </form>
  );
};

export default Component;
