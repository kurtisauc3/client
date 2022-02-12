import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import api from 'services/api';
import { useAppSelector } from 'store';

type FormValues = {
  userName: string;
};

const Component: FC = () => {
  const name = useAppSelector((state) => state.user.profile?.user.name);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      userName: name
    }
  });

  return (
    <div>
      <>update user name</>
      <form
        onSubmit={handleSubmit(({ userName }) => {
          api.playerState.updateUserName(userName);
        })}
      >
        <div>
          <label htmlFor="user-name">
            <FormattedMessage id="userName" />
          </label>
          <input id="user-name" {...register('userName')} />
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
