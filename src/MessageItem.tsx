import { FC } from 'react';

type Props = {
  messageItem: MessageItem;
};

const Component: FC<Props> = ({ messageItem }) => {
  return (
    <div>
      <>message item</>
      <div>text: {messageItem.message.content.text}</div>
      <div>sentAt: {messageItem.message.sentAt}</div>
      <div>read: {String(messageItem.read)}</div>
    </div>
  );
};

export default Component;
