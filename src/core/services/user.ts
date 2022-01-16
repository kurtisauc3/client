import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TUserView = 'auth' | 'idle';

interface TUserState {
  view: TUserView;
}

const initialState: TUserState = {
  view: 'auth'
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TUserView>) => {
      state.view = action.payload;
    }
  }
});

export default slice;
