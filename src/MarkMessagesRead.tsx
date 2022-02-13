import { FC } from 'react';
import api from 'services/api';
import { useAppDispatch } from 'store';
import { loadMessagesPage } from 'store/user';

type Props = {
  userPresence: UserPresence;
  messagesPage: MessagesPage;
};

const Component: FC<Props> = ({ userPresence, messagesPage }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          api.messaging.markMessagesRead(
            'inbox',
            messagesPage.items.filter((item) => item.msgbox === 'inbox').map((item) => item.msgId),
            (result) => {
              if ('data' in result) {
                dispatch(loadMessagesPage(userPresence.user.id));
              }
            }
          );
        }}
      >
        mark messages read
      </button>
    </div>
  );
};

export default Component;
