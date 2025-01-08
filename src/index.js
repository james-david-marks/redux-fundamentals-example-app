import React from 'react'
import './index.css'
import App from './App'
import store from './store'
//import './api/server'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
//import { fetchSomeData } from './model/todoCollection'
import { fetchTodos } from './model/todoCollection'
import 'bootstrap/dist/css/bootstrap.min.css'

console.log('Initial state: ', store.getState())

//store.dispatch(fetchSomeData)
store.dispatch(fetchTodos)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)