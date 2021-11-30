import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

import 'bulma/css/bulma.min.css';
import './App.css'

ReactDOM.render(
  <Router>
   <App />
  </Router>,
  document.getElementById('root')
);

