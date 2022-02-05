import client from 'core/redux/client';
import { useAppDispatch } from 'core/redux/store';
import api from 'core/services/api';
import { CustomSuccessCode } from 'core/types/enums';

const useFriendRequestUtils = (friendRequest: FriendRequestEvent) => {
  const dispatch = useAppDispatch();
  const {
    evId: eventId,
    eventData: {
      entityId,
      summaryData: { profileId }
    }
  } = friendRequest;

  const handleAccept = () => {
    api.script.runScript('acceptFriendRequest', { eventId, entityId, profileId }, (result) => {
      if ('data' in result) {
        if (result.data.response.custom_error) {
          dispatch(
            client.actions.setNotify({
              titleCode: 'error',
              messageCode: result.data.response.custom_error
            })
          );
        } else {
          dispatch(
            client.actions.setNotify({
              titleCode: 'success',
              messageCode: CustomSuccessCode.FriendRequestAccepted
            })
          );
        }
      }
    });
  };

  const handleDecline = () => {
    api.script.runScript('declineFriendRequest', { eventId, entityId, profileId }, (result) => {
      if ('data' in result) {
        if (result.data.response.custom_error) {
          dispatch(
            client.actions.setNotify({
              titleCode: 'error',
              messageCode: result.data.response.custom_error
            })
          );
        } else {
          dispatch(
            client.actions.setNotify({
              titleCode: 'success',
              messageCode: CustomSuccessCode.FriendRequestDeclined
            })
          );
        }
      }
    });
  };

  return {
    handleAccept,
    handleDecline
  };
};

export default useFriendRequestUtils;
