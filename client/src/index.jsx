import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/app.js'
import store from './store.js'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('app'));

// import { createStore } from 'redux';

// const reducer = () => {

// }

// const store = createStore(reducer, 0);

// store.subscribe(() => {
//   console.log('store changed', store.getState())
// })

// store.dispatch({type: "INC", payload: 1})