import { createAction } from '@reduxjs/toolkit';

export const RegisterUserRequest = createAction(
  'SignUpView/RegisterUserRequest',
);
export const RegisterUserSuccess = createAction(
  'SignUpView/RegisterUserSuccess',
);
export const RegisterUserError = createAction('SignUpView/RegisterUserError');
export const LogInUserRequest = createAction('LogInView/LogInUserRequest');
export const LogInUserSuccess = createAction('LogInView/LogInUserSuccess');
export const LogInUserError = createAction('LogInView/LogInUserError');
export const LogOutUserRequest = createAction('LogInOut/LogOutUserRequest');
export const LogOutUserSuccess = createAction('LogInOut/LogOutUserSuccess');
export const LogOutUserError = createAction('LogInOut/LogOutUserError');
export const GetCurrentUserRequest = createAction('Auth/GetCurrentUserRequest');
export const GetCurrentUserSuccess = createAction('Auth/GetCurrentUserSuccess');
export const GetCurrentUserError = createAction('Auth/GetCurrentUserError');
