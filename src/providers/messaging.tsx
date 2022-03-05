import { createContext, FC, useContext, useState } from 'react';

interface IMessagingContext {
  unreadMessages?: Map<string, number>;
  messages?: Map<string, MessagesPage>;
  loadUnreadMessages: () => void;
  openMessages: (profileId: string) => void;
  closeMessages: (profileId: string) => void;
  markMessagesRead: () => void;
  sendMessage: () => void;
}

const MessagingContext = createContext<IMessagingContext>({
  loadUnreadMessages: () => {},
  openMessages: () => {},
  closeMessages: () => {},
  markMessagesRead: () => {},
  sendMessage: () => {}
});

const useMessaging = () => {
  const context = useContext(MessagingContext);
  if (context === undefined) {
    throw new Error('useMessaging must be used within an MessagingProvider');
  }
  return context;
};

const MessagingProvider: FC = (props) => {
  // TODO: messaging provider
  const [unreadMessages, setUnreadMessages] = useState<IMessagingContext['unreadMessages']>();
  const [messages, setMessages] = useState<IMessagingContext['messages']>();
  const loadUnreadMessages: IMessagingContext['loadUnreadMessages'] = () => {};
  const openMessages: IMessagingContext['openMessages'] = () => {};
  const closeMessages: IMessagingContext['closeMessages'] = () => {};
  const markMessagesRead: IMessagingContext['markMessagesRead'] = () => {};
  const sendMessage: IMessagingContext['sendMessage'] = () => {};

  return (
    <MessagingContext.Provider
      value={{
        unreadMessages,
        messages,
        loadUnreadMessages,
        openMessages,
        closeMessages,
        markMessagesRead,
        sendMessage
      }}
      {...props}
    />
  );
};

export { MessagingProvider, useMessaging };

// export const loadUnreadMessages = (): ApiAction => (dispatch) => {
//     api.messaging.getMessagesPage(
//       {
//         searchCriteria: {
//           msgbox: 'inbox',
//           'message.to': api.getProfileId(),
//           read: false
//         }
//       },
//       (result) => {
//         if ('data' in result) {
//           const unreadMessagesMap = result.data.results.items.reduce((previous, current) => {
//             const fromProfileId = current.message.from.id;
//             const count = previous[fromProfileId] || 0;
//             previous[fromProfileId] = count + 1;
//             return previous;
//           }, {} as Record<profileId, number>);
//           dispatch(slice.actions.setUnreadMessages(unreadMessagesMap));
//         }
//       }
//     );
//   };

//   export const loadMessagesPage =
//     (fromProfileId: string): ApiAction =>
//     (dispatch) => {
//       api.messaging.getMessagesPage(
//         {
//           searchCriteria: {
//             $or: [
//               {
//                 'message.to': api.getProfileId(),
//                 'message.from.id': fromProfileId
//               },
//               {
//                 'message.to': fromProfileId,
//                 'message.from.id': api.getProfileId()
//               }
//             ]
//           },
//           sortCriteria: {
//             mbCr: -1
//           }
//         },
//         (result) => {
//           if ('data' in result) {
//             dispatch(
//               slice.actions.setMessagesPage({ fromProfileId, messagesPage: result.data.results })
//             );
//           }
//         }
//       );
//     };

//   export const markMessagesRead =
//     (messagesPage: MessagesPage): ApiAction =>
//     (dispatch) => {
//       api.messaging.markMessagesRead(
//         'inbox',
//         messagesPage.items.map((item) => item.msgId),
//         (result) => {
//           if ('data' in result) {
//             dispatch(slice.actions.setUnreadMessages({}));
//           }
//         }
//       );
//     };
