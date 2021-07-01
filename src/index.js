import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import BlueBearTemplate from './components/BlueBearTemplate';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path = "/" component = {App} />
      <Route path = "bluebear" exact component = {BlueBearTemplate} />
    </Switch>
  </Router>

), document.getElementById('root'));