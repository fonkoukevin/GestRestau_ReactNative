import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/users.slice';
import authReducer from './slices/auth.slice';
import tablesReducer from './slices/table';
const reducer = {
  users: usersReducer,
  auth: authReducer,
  tables: tablesReducer
};
const store = configureStore({ reducer, devTools: true });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
