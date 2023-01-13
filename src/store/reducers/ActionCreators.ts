import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';
import { userSlice } from './UserSlice';

//~ 1 способ
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const res = await axios.get<IUser[]>(
//       `https://jsonplaceholder.typicode.com/users`
//     );
//     dispatch(userSlice.actions.userFetchingSuccess(res.data));
//   } catch (e: any) {
//     dispatch(userSlice.actions.userFetchingError(e.message));
//   }
// };

//? 2 способ
export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
