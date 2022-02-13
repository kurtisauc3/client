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
          api.presence.registerListenersForProfiles(profileIds, true, (result) => {
            if ('data' in result) {
              api.friend.addFriends(profileIds, (result2) => {
                if ('data' in result2) {
                  reset();
                }
              });
            }
          });
        })}
      >
        <div>
          <label htmlFor="profile-id">
            <FormattedMessage id="profileId" />
          </label>
          <input id="profile-id" {...register('profileIds.0')} />
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
