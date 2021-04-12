import axios from 'axios';
import {
  SubmitContactRequest,
  SubmitContactSuccess,
  SubmitContactError,
  DeleteContactRequest,
  DeleteContactSuccess,
  DeleteContactError,
  FetchContactsRequest,
  FetchContactsSuccess,
  FetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const Submit = newName => dispatch => {
  dispatch(SubmitContactRequest());
  axios
    .post('/contacts', newName)
    .then(({ data }) => dispatch(SubmitContactSuccess(data)))
    .catch(error => dispatch(SubmitContactError(error)));
};

export const DeleteContact = id => dispatch => {
  dispatch(DeleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(DeleteContactSuccess(id)))
    .catch(error => dispatch(DeleteContactError(error)));
};

export const FetchContacts = () => dispatch => {
  dispatch(FetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(FetchContactsSuccess(data));
    })
    .catch(error => FetchContactsError(error));
};
