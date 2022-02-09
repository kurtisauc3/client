import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';
import { useAppDispatch } from 'store';
import user from 'store/user';

type FormValues = {
  email: string;
  password: string;
};

const emailPattern = new RegExp(
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
);
const passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      email: 'kurtistrainor@gmail.com',
      password: 'kurtistrainor@gmail.com'
    }
  });

  useEffect(() => {
    dispatch(user.actions.reset());
  });

  return (
    <form
      onSubmit={handleSubmit(({ email, password }) => {
        api.authentication.authenticateEmailPassword(email, password, false, (result) => {
          if ('data' in result) {
            navigate('/');
          }
        });
      })}
    >
      <div>
        <label htmlFor="login-email">
          <FormattedMessage id="email" />
        </label>
        <input autoFocus id="login-email" {...register('email')} />
      </div>
      {errors.email && <div>{errors.email.message}</div>}
      <div>
        <label htmlFor="login-password">
          <FormattedMessage id="password" />
        </label>
        <input id="login-password" type="password" {...register('password')} />
      </div>
      {errors.password && <div>{errors.password.message}</div>}
      <div>
        <button type="submit">
          <FormattedMessage id="login" />
        </button>
      </div>
    </form>
  );
};

export default Component;
