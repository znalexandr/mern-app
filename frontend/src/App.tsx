import React, { Suspense, lazy } from 'react';
import { Router, Switch } from 'react-router-dom';

import { History } from '@/services';
import { PublicRoute, PrivateRoute } from '@/components';

import { StylesProvider } from './StylesProvider';

const HomePage = lazy(() => import('@/pages/HomePage'));

function App() {
  return (
    <StylesProvider>
      <Router history={History}>
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute path="/login">
              <>login</>
            </PublicRoute>
            <PrivateRoute path="/">
              <HomePage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}

export default App;
