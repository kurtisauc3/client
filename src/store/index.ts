import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import clientReducer from './client';
import userReducer from './user';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
  reducer: {
    client: clientReducer.reducer,
    user: userReducer.reducer
  },
  enhancers: [composedEnhancer]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppSelector<Return> = (state: RootState) => Return;
export type ApiAction = ThunkAction<void, RootState, unknown, AnyAction>;
export const createAppSelector = <Return>(selector: AppSelector<Return>): AppSelector<Return> =>
  selector;
export default store;
