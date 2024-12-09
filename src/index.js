import React from 'react'
import './index.css'
import App from './App'
import store from './store'
//import './api/server'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { createRoot } from "react-dom/client"


console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(
  () => {} //console.log('SUBSCRIBED: State after dispatch: ', store.getState())
)


console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')

const dispatchResult = store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
console.log(dispatchResult)

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })
store.dispatch({ type: 'todos/todoToggled', payload: 2 })
store.dispatch({ type: 'todos/todoToggled', payload: 3 })
store.dispatch({ type: 'todos/todoToggled', payload: 5 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'blue', changeType: 'added' }
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'green', changeType: 'added' }
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'removed' }
})

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'All' })

store.dispatch({ type: 'todos/todoSetColor', payload: {id: 0, color: 'green'} })


unsubscribe()

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

store.dispatch({ type: 'todos/todoAdded', payload: 'Fix selected status for Filter' })


// const root = createRoot(document.getElementById('root'))

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>
// )


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)