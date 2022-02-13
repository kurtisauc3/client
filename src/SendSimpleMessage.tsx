import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import api from 'services/api';
import { useAppDispatch } from 'store';
import { loadMessagesPage } from 'store/user';

type Props = {
  userPresence: UserPresence;
};

type FormValues = {
  toProfileIds: string[];
  contentString: string;
};

const Component: FC<Props> = ({ userPresence }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      toProfileIds: [userPresence.user.id],
      contentString: ''
    }
  });

  return (
    <div>
      <>send simple message</>
      <form
        onSubmit={handleSubmit(({ toProfileIds, contentString }) => {
          api.messaging.sendMessageSimple(toProfileIds, contentString, (result) => {
            if ('data' in result) {
              dispatch(loadMessagesPage(userPresence.user.id));
              reset();
            }
          });
        })}
      >
        <div>
          <label htmlFor="content-string">
            <FormattedMessage id="contentString" />
          </label>
          <input id="content-string" {...register('contentString')} />
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
