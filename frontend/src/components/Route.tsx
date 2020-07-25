import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { Session } from '@/services';

export function PublicRoute(props: RouteProps) {
  const { path, exact, children } = props;

  return (
    <Route path={path} exact={exact}>
      {Session.getToken() ? <Redirect to="/" /> : children}
    </Route>
  );
}

export function PrivateRoute(props: RouteProps) {
  const { path, exact, children } = props;

  return (
    <Route path={path} exact={exact}>
      {Session.getToken() ? children : <Redirect to="/login" />}
    </Route>
  );
}
