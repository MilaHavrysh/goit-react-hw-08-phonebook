import { Route, Redirect } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const Auth = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        Auth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
