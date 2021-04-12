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
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.register} component={SignUpView} />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo="/contacts"
            component={LogInView}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsUserView}
            redirectTo={'/login'}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
