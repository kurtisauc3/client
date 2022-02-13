import { FC } from 'react';
import MarkMessagesRead from './MarkMessagesRead';
import MessageItem from './MessageItem';
import SendSimpleMessage from './SendSimpleMessage';

type Props = {
  userPresence: UserPresence;
  messagesPage: MessagesPage;
};

const Component: FC<Props> = ({ userPresence, messagesPage }) => {
  return (
    <div>
      <>get messages page</>
      <MarkMessagesRead messagesPage={messagesPage} userPresence={userPresence} />
      {messagesPage.items.map((item) => (
        <div key={item.msgId}>
          <MessageItem messageItem={item} />
        </div>
      ))}
      <SendSimpleMessage userPresence={userPresence} />
    </div>
  );
};

export default Component;
