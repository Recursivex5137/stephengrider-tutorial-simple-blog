import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

import reducers from './state/reducers';
import App from './App';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
