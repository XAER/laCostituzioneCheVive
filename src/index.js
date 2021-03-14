import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
