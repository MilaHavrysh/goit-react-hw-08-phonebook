import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  RegisterUserSuccess,
  RegisterUserError,
  LogInUserSuccess,
  LogInUserError,
  LogOutUserSuccess,
  LogOutUserError,
  GetCurrentUserSuccess,
  GetCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [RegisterUserSuccess]: (_, { payload }) => payload.user,
  [LogInUserSuccess]: (_, { payload }) => payload.user,
  [LogOutUserSuccess]: () => initialUserState,
  [GetCurrentUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [RegisterUserSuccess]: (_, { payload }) => payload.token,
  [LogInUserSuccess]: (_, { payload }) => payload.token,
  [LogOutUserSuccess]: () => null,
});

const error = createReducer(null, {
  [RegisterUserError]: (_, { payload }) => payload,
  [LogInUserError]: (_, { payload }) => payload,
  [LogOutUserError]: (_, { payload }) => payload,
  [GetCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [RegisterUserSuccess]: () => true,
  [LogInUserSuccess]: () => true,
  [GetCurrentUserSuccess]: () => true,
  [RegisterUserError]: () => false,
  [LogInUserError]: () => false,
  [GetCurrentUserError]: () => false,
  [LogOutUserSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
