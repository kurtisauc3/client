import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TUserView = 'auth' | 'idle';

interface TUserState {
  view: TUserView;
}

const initialState: TUserState = {
  view: 'auth'
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TUserView>) => {
      state.view = action.payload;
    },
    reset: (state) => {
      state = initialState;
    }
  }
});

export default slice;
