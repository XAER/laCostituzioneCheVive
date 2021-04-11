import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux'

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
