import { Route, Redirect } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const Auth = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        Auth && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
