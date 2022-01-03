import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAuthView =
  | 'login'
  | 'createAccount'
  | 'forgotPassword'
  | 'emailSent'
  | 'createUsername'
  | 'authenticated';

interface IAuthState {
  view: TAuthView;
}

const initialState: IAuthState = {
  view: 'login'
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TAuthView>) => {
      state.view = action.payload;
    },
    reset: (state) => {
      state = initialState;
    }
  }
});

export default slice;
