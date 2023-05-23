import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

// export const setupStore = () => {
//   return configureStore({ reducer: rootReducer });
// };
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
