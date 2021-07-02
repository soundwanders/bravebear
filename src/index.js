import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlueBearTemplate from './components/BlueBearTemplate';
import BrownBearTemplate from './components/BrownBearTemplate';
import RedBearTemplate from './components/RedBearTemplate';
import App from './App';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path = "/" component = {App} />
        <Route path = "/bluebear" exact component = {BlueBearTemplate} />
        <Route path = "/brownbear" exact component = {BrownBearTemplate} />
        <Route path = "/redbear" exact component = {RedBearTemplate} />
    </Switch>
  </Router>

), document.getElementById('root'));