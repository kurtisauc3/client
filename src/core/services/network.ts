import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TNetworkView = 'hidden' | 'loading';

interface TUserState {
  view: TNetworkView;
  errorCode?: number;
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
    setErrorCode: (state, action: PayloadAction<number>) => {
      state.errorCode = action.payload;
    },
    clearErrorCode: (state) => {
      state.errorCode = undefined;
    }
  }
});

export default slice;
