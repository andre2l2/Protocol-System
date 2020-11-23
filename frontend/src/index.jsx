import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './global.css';
import Login from './pages/Login';
import Info from './pages/Info';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/info" exact>
        <Info />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
