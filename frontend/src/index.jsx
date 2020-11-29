import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './global.css';
import Login from './pages/Login';
import Info from './pages/Info';
import Process from './pages/Process';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      <Route path="/info" exact>
        <Info />
      </Route>
      <Route path="/process" exact>
        <Process />
      </Route>
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
