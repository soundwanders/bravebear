import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import BlueBearTemplate from './App';

ReactDOM.render((
  <Router>
      <Route exact path = "/" component = {App} />
      <Route path = "bluebear" component = {BlueBearTemplate} />
  </Router>

), document.getElementById('root'));