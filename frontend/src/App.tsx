import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { PublicRoute, PrivateRoute } from '@/domains/router';
import { Session } from '@/services';
import { StylesProvider, PublicLayout, PrivateLayout } from '@/layouts';

import AuthSection from '@/pages/auth/AuthSection';

const HomePage = lazy(() => import('@/pages/HomePage'));

const Layout = Session.getToken() ? PrivateLayout : PublicLayout;

function App() {
  return (
    <StylesProvider>
      <ToastContainer hideProgressBar />
      <Layout>
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <PublicRoute path="/auth">
                <AuthSection />
              </PublicRoute>
              <PrivateRoute path="/">
                <HomePage />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </StylesProvider>
  );
}

export default App;
