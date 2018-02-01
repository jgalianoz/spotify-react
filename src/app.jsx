import React from 'react';
import { render } from 'react-dom';

import Home from './components/Home';

import './utils/globals.js';
import 'normalize.css';

render(
  <Home/>,
  document.getElementById('app')
);
