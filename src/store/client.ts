import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TNotify =
  | {
      type: 'hidden';
    }
  | {
      type: 'error' | 'success';
      messageCode: CustomCode;
    };
interface IClientState {
  notify: TNotify;
}

const initialState: IClientState = {
  notify: {
    type: 'hidden'
  }
};

const slice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setNotify: (state, action: PayloadAction<TNotify>) => {
      state.notify = action.payload;
    }
  }
});

export default slice;
