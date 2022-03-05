import { createContext, FC, useContext, useState } from 'react';
import api from 'services/api';

type TRTTContext = {
  status: 'connected' | 'disconnected';
  connect: typeof api.rttService.enableRTT;
};

const RTTContext = createContext<TRTTContext>({
  status: 'disconnected',
  connect: () => {}
});

const useRTT = () => {
  const context = useContext(RTTContext);
  if (context === undefined) {
    throw new Error('useRtt must be used within an RttProvider');
  }
  return context;
};

const RTTProvider: FC = (props) => {
  const [status, setStatus] = useState<TRTTContext['status']>('disconnected');
  const connect: TRTTContext['connect'] = (callback) => {
    api.rttService.enableRTT(
      (result) => {
        if ('data' in result) {
          api.rttService.registerRTTMessagingCallback((messageResult) => {
            // TODO: live messaging updates
            console.log('registerRTTMessagingCallback', messageResult);
          });
          api.rttService.registerRTTChatCallback((chatResult) => {
            // TODO: live chat updates
            console.log('registerRTTChatCallback', chatResult);
          });
          api.rttService.registerRTTEventCallback((eventResult) => {
            // TODO: live event updates
            console.log('registerRTTEventCallback', eventResult);
          });
          api.rttService.registerRTTLobbyCallback((lobbyResult) => {
            // TODO: live lobby updates
            console.log('registerRTTLobbyCallback', lobbyResult);
          });
          api.rttService.registerRTTPresenceCallback((presenceResult) => {
            // TODO: live presence updates
            console.log('registerRTTPresenceCallback', presenceResult);
          });
          setStatus('connected');
        }
        callback?.(result);
      },
      (error) => {
        api.rttService.deregisterAllRTTCallbacks();
        api.resetCommunication();
        setStatus('disconnected');
      }
    );
  };
  return <RTTContext.Provider value={{ status, connect }} {...props} />;
};

export { RTTProvider, useRTT };
