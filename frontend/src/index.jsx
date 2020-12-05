import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './global.css';

import Login from './pages/Login';
import Info from './pages/Info';
import Process from './pages/Process';
import Create from './pages/Create';
import ExistentProcess from './pages/ExistentProcess';
import ChatAndCall from './pages/ChatAndCall';
import SettingsPage from './pages/SettingsPage';
import FeedBackChat from './pages/Feedback';
import Chitchat from './pages/Chitchat';

import SlideButton from './components/SlideButton';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/info" exact>
        <Info />
      </Route>
      <Route path="/process/" exact>
        <Process />
      </Route>
      <Route path="/create/" exact>
        <Create />
      </Route>
      <Route path="/existent/" exact>
        <ExistentProcess />
      </Route>
      <Route path="/chatAndCall/" exact>
        <ChatAndCall />
      </Route>
      <Route path="/chatAndCall/feedback/" exact>
        <FeedBackChat />
      </Route>
      <Route path="/chatAndCall/chitchat/">
        <Chitchat />
      </Route>
      <Route path="/settings/" exact>
        <SettingsPage />
      </Route>
      <Route path="/test/">
        <SlideButton />
      </Route>
  
      <Redirect to="/login" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
