import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reducers from './state/reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
