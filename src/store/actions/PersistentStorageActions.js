import {createAction} from '@reduxjs/toolkit';

const setUser = createAction('persistentStorage/setUser');
const setPassword = createAction('persistentStorage/setPassword');

export default {
  setUser,
  setPassword,
};
