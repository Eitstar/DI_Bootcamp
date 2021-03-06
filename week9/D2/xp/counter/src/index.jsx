import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counter from './reducers/counter'
import Counter from './components/Counter'
import reportWebVitals from './reportWebVitals';

render(
  <Provider store={createStore(counter)}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
