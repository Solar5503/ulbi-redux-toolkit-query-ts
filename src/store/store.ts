import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({ userReducer });

// export const setupStore = () => {
//   return configureStore({ reducer: rootReducer });
// };
export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
