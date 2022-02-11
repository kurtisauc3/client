import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import api from 'services/api';

type FormValues = {
  profileIds: string[];
};

const Component: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      profileIds: []
    }
  });

  return (
    <div>
      <>add friends</>
      <form
        onSubmit={handleSubmit(({ profileIds }) => {
          api.friend.addFriends(profileIds, (result) => {
            if ('data' in result) {
              reset();
            }
          });
        })}
      >
        <div>
          <label htmlFor="profile-id">
            <FormattedMessage id="profileId" />
          </label>
          <input autoFocus id="profile-id" {...register('profileIds.0')} />
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