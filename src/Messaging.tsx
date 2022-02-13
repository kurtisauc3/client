import { FC, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { loadMessagesPage } from 'store/user';
import GetMessagesPage from './GetMessagesPage';

type Props = {
  userPresence: UserPresence;
};

const Component: FC<Props> = ({ userPresence }) => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const messagesPage = useAppSelector((state) => state.user.messaging[userPresence.user.id]);
  const unreadMessageCount = useMemo(
    () => messagesPage?.items.filter((item) => item.msgbox === 'inbox' && !item.read).length || 0,
    [messagesPage]
  );

  useEffect(() => {
    if (isVisible) {
      dispatch(loadMessagesPage(userPresence.user.id));
    }
  }, [isVisible, dispatch, userPresence.user.id]);

  return (
    <div>
      <>messaging</>
      <div>
        <button type="button" onClick={() => setIsVisible(true)}>
          show messages
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setIsVisible(false)}>
          hide messages
        </button>
      </div>
      <div>unread message count: {unreadMessageCount}</div>
      {isVisible && messagesPage && (
        <GetMessagesPage messagesPage={messagesPage} userPresence={userPresence} />
      )}
    </div>
  );
};

export default Component;
