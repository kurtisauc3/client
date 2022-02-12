import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import api from 'services/api';
import { useAppSelector } from 'store';

type FormValues = {
  userPictureUrl: string | null;
};

const Component: FC = () => {
  const pic = useAppSelector((state) => state.user.profile?.user.pic);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      userPictureUrl: pic
    }
  });

  return (
    <div>
      <>update user picture url</>
      <form
        onSubmit={handleSubmit(({ userPictureUrl }) => {
          api.playerState.updateUserPictureUrl(userPictureUrl);
        })}
      >
        <div>
          <label htmlFor="user-picture-url">
            <FormattedMessage id="userPictureUrl" />
          </label>
          <input id="user-picture-url" {...register('userPictureUrl')} />
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
