import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  //devTools: process.env.NODE_ENV === 'development',
  middleware: middleware,
});

const persistor = persistStore(store);

const storObject = {
  store,
  persistor,
};

export default storObject;
//export default {store, persistor};
