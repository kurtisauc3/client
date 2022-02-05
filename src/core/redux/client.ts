import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type TNotify = {
  titleCode: 'error' | 'success';
  messageCode: CustomCode;
};
interface IClientState {
  notify?: TNotify;
}

const initialState: IClientState = {};

const slice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setNotify: (state, action: PayloadAction<TNotify | undefined>) => {
      state.notify = action.payload;
    }
  }
});

export default slice;

export const selectShouldLogin = ({ client: { notify } }: RootState): boolean =>
  notify?.titleCode === 'error' && [40356, 40304].includes(notify.messageCode);
