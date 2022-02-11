import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';

type FormValues = {
  universalId: string;
  password: string;
  forceCreate: boolean;
};

const Component: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      universalId: 'kurtistrainor@gmail.com',
      password: 'kurtistrainor@gmail.com',
      forceCreate: false
    }
  });

  return (
    <div>
      <>authenticate</>
      <form
        onSubmit={handleSubmit(({ universalId, password, forceCreate }) => {
          api.authentication.authenticateUniversal(universalId, password, forceCreate, (result) => {
            if ('data' in result) {
              navigate('/');
            }
          });
        })}
      >
        <div>
          <label htmlFor="login-universal-id">
            <FormattedMessage id="universalId" />
          </label>
          <input autoFocus id="login-universal-id" {...register('universalId')} />
        </div>
        <div>
          <label htmlFor="login-password">
            <FormattedMessage id="password" />
          </label>
          <input id="login-password" type="password" {...register('password')} />
        </div>
        <div>
          <label htmlFor="login-force-create">
            <FormattedMessage id="forceCreate" />
          </label>
          <input id="login-force-create" type="checkbox" {...register('forceCreate')} />
        </div>
        <div>
          <button type="submit">
            <FormattedMessage id="submit" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Component;
