import { createAction } from '@reduxjs/toolkit';

export const FetchContactsRequest = createAction(
  'ContactList/FetchContactRequest',
);
export const FetchContactsSuccess = createAction(
  'ContactList/FetchContactSuccess',
);
export const FetchContactsError = createAction('ContactList/FetchContactError');

export const SubmitContactRequest = createAction(
  'ContactForm /SubmitContactRequest',
);
export const SubmitContactSuccess = createAction(
  'ContactForm /SubmitContactSuccess',
);
export const SubmitContactError = createAction(
  'ContactForm /SubmitContactError',
);
export const DeleteContactRequest = createAction(
  'ContactList / DeleteContactRequest',
);
export const DeleteContactSuccess = createAction(
  'ContactList / DeleteContactSuccess',
);
export const DeleteContactError = createAction(
  'ContactList / DeleteContactError',
);

export const SetFilter = createAction('Filter/SetFilter');
