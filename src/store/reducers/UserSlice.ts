import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //? Способ по умолчанию
    // userFetching(state) {
    //   state.isLoading = true;
    // },
    // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // userFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    //^ Новый способ
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = '';
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
  //   {
  //     //& Старый способ
  //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
  //       state.isLoading = false;
  //       state.error = '';
  //       state.users = action.payload;
  //     },
  //     [fetchUsers.pending.type]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

export default userSlice.reducer;
