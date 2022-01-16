import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TIdleView = 'home' | 'play' | 'profile';
type TModalView = 'hidden' | 'addFriends';

interface IIdleState {
  view: TIdleView;
  modal: TModalView;
}

const initialState: IIdleState = {
  view: 'home',
  modal: 'hidden'
};

const slice = createSlice({
  name: 'idle',
  initialState,
  reducers: {
    goTo: (state, action: PayloadAction<TIdleView>) => {
      state.view = action.payload;
    },
    showModal: (state, action: PayloadAction<Exclude<TModalView, 'hidden'>>) => {
      state.modal = action.payload;
    },
    hideModal: (state) => {
      state.modal = 'hidden';
    }
  }
});

export default slice;
