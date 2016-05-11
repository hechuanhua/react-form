import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import stores from './reducers'
import App from './containers/App.js'
import './css/form.css'
import './css/style.css'
let store = createStore(stores)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('form')
)