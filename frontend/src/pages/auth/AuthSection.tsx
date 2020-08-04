import React, { lazy } from 'react';
import { Route, useRouteMatch, Redirect } from 'react-router-dom';

const LoginPage = lazy(() => import('./LoginPage'));
const RegisterPage = lazy(() => import('./RegisterPage'));

export default function AuthSection() {
  const match = useRouteMatch();

  const path = {
    login: `${match.url}/login`,
    register: `${match.url}/register`
  };

  return (
    <>
      <Route path={match.path} exact>
        <Redirect to={path.login} />
      </Route>
      <Route path={path.login}>
        <LoginPage />
      </Route>
      <Route path={path.register}>
        <RegisterPage />
      </Route>
    </>
  );
}
