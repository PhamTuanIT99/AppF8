import {createReducer} from '@reduxjs/toolkit';
import AppActions from '../actions/PersistentStorageActions';

const initialState = {
  userName: '',
  passWord: '',
};
export default createReducer(initialState, builder =>
  builder
    .addCase(AppActions.setUser, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(AppActions.setPassword, (state, action) => {
      state.passWord = action.payload;
    }),
);
