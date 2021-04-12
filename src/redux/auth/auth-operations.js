import axios from 'axios';
import {
  RegisterUserRequest,
  RegisterUserSuccess,
  RegisterUserError,
  LogInUserRequest,
  LogInUserSuccess,
  LogInUserError,
  LogOutUserRequest,
  LogOutUserSuccess,
  LogOutUserError,
  GetCurrentUserRequest,
  GetCurrentUserSuccess,
  GetCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const ReguisterUser = newUser => dispatch => {
  dispatch(RegisterUserRequest());
  axios
    .post('/users/signup', newUser)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(RegisterUserSuccess(data));
    })
    .catch(error => dispatch(RegisterUserError(error.message)));
};

export const LogInUser = user => dispatch => {
  dispatch(LogInUserRequest());
  axios
    .post('/users/login', user)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(LogInUserSuccess(data));
    })
    .catch(error => dispatch(LogInUserError(error.message)));
};

export const LogOutUser = () => dispatch => {
  dispatch(LogOutUserRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(LogOutUserSuccess());
    })
    .catch(error => dispatch(LogOutUserError(error.message)));
};

export const GetCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(GetCurrentUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => dispatch(GetCurrentUserSuccess(data)))
    .catch(error => dispatch(GetCurrentUserError(error.message)));
};
