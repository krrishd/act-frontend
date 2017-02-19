import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import What from './What';
import How from './How';
import Agenda from './Agenda';
import './index.css';

import { 
  Router,
  Route,
  browserHistory
} from 'react-router';

import store from './configure-store';

let appStore = store('act-actions', null);
const API_URI = 'http://act-api-159121.appspot-preview.com';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route
        path='/create/what'
        store={appStore}
        component={What} />
      <Route
        path='/create/how'
        store={appStore}
        component={How}
        api={API_URI} />
      <Route
        path='/how/:id'
        component={Agenda}
        api={API_URI} />
    </Router>
  ),
  document.getElementById('root')
);
