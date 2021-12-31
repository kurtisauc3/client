import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TIdleView = 'home' | 'play' | 'profile';

interface IIdleState {
  view: TIdleView;
}

const initialState: IIdleState = {
  view: 'home'
};

export const slice = createSlice({
  name: 'idle',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TIdleView>) => {
      state.view = action.payload;
    },
    reset: (state) => {
      state = initialState;
    }
  }
});

export default slice;
