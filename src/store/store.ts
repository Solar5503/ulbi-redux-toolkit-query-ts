import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import userReducer from './reducers/UserSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
