import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TNotify = {
  type: 'error' | 'success';
  messageCode: CustomCode;
};
interface IClientStore {
  notify?: TNotify;
}

const initialState: IClientStore = {};

const slice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setNotify: (state, action: PayloadAction<TNotify>) => {
      state.notify = action.payload;
    },
    clearNotify: (state) => {
      state.notify = undefined;
    }
  }
});

export default slice;
