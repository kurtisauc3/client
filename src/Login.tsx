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
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: 'kurtistrainor@gmail.com',
      password: 'kurtistrainor@gmail.com'
    }
  });

  return (
    <form
      onSubmit={handleSubmit(({ username, password }) => {
        api.authentication.authenticateUniversal(username, password, false, (result) => {
          if ('data' in result) {
            navigate('/');
          }
        });
      })}
    >
      <div>
        <label htmlFor="login-username">
          <FormattedMessage id="username" />
        </label>
        <input autoFocus id="login-username" {...register('username')} />
      </div>
      <div>
        <label htmlFor="login-password">
          <FormattedMessage id="password" />
        </label>
        <input id="login-password" type="password" {...register('password')} />
      </div>
      <div>
        <button type="submit">
          <FormattedMessage id="login" />
        </button>
      </div>
    </form>
  );
};

export default Component;
