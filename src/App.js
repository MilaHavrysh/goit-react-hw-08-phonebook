import './App.css';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
import routes from './routes';
import { GetCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
const SignUpView = lazy(() =>
  import('./views/SignUpView/SignUpView' /*webpackChunkName: "SignUpView"*/),
);
const LogInView = lazy(() =>
  import('./views/LogInView/LogInView.jsx' /*webpackChunkName: "LogInView"*/),
);
const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const ContactsUserView = lazy(() =>
  import(
    './views/UserContactsView/UserContactsView.jsx' /*webpackChunkName: "HomePage"*/
  ),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(GetCurrentUser()), []);
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <PublicRoute
            exact
            path={routes.home}
            redirectTo="/"
            component={HomePage}
          />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo="/contacts"
            component={SignUpView}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo="/contacts"
            component={LogInView}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsUserView}
            redirectTo={'/contacts'}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
