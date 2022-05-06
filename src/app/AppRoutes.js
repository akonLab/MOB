import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';


const Methodology = lazy(() => import('./pages/Methodology'));
const Costs = lazy(() => import('./pages/Costs'));
const LaborAndFunds = lazy(() => import('./pages/LaborAndFunds'));
const About = lazy(() => import('./pages/About'));
const MatrixMultiplier = lazy(() => import('./pages/MatrixMultiplier'));


const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>

          <Route path="/methodology" component={ Methodology } />
          <Route path="/costs" component={ Costs } />
          <Route path="/labor-and-funds" component={ LaborAndFunds } />
          <Route exact path="/" component={ About } />
          <Route  path="/about" component={ About } />
          <Route path="/matrix-multiplier" component={ MatrixMultiplier } />


          <Route path="/user-pages/login" component={ Login } />
          <Route path="/user-pages/register" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;