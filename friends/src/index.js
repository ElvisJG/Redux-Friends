import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import friendsReducer from './reducers/friendsReducer';

import App from './components/App';
import './scss/index.scss';

const logger = store => next => action => {
  console.log('Prev State', store.getState());
  console.log('Action', action);

  next(action);

  console.log('New State', store.getState());
};

const store = createStore(
  friendsReducer,
  // compose multiple middleware flows together into one flow
  compose(
    // our custom middleware
    applyMiddleware(thunk, logger),
    // redux dev tools middleware
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
