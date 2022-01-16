import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './auth';
import idleReducer from './idle';
import networkReducer from './network';
import userReducer from './user';

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    auth: authReducer.reducer,
    idle: idleReducer.reducer,
    network: networkReducer.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
