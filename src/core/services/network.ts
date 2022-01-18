import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TNetworkView = 'hidden' | 'loading';
type TNotify = {
  type: 'error' | 'success';
  code: CustomCode;
};

interface TUserState {
  view: TNetworkView;
  notify?: TNotify;
}

const initialState: TUserState = {
  view: 'hidden'
};

const slice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TNetworkView>) => {
      state.view = action.payload;
    },
    setNotify: (state, action: PayloadAction<TNotify>) => {
      state.notify = action.payload;
    },
    clearNotify: (state) => {
      state.notify = undefined;
    }
  }
});

export default slice;
