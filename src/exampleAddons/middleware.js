import { client } from '../api/client'

export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

export function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here
      console.log('four')
      return next(action)
    }
  }
}

export const printfive = storeAPI => next => action => {
  console.log('five')
  return next(action)
}

export const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return {"Note" : "from loggerMiddleware" , result}
}

export const alwaysReturnHelloMiddleware = storeAPI => next => action => {
  const originalResult = next(action)
  // Ignore the original result, return something else
  const returnthis = {"Note" : "ORIGINAL RESULT", originalResult}
  return returnthis //'Hello!'
}

export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'filters/statusFilterChanged') {
    setTimeout(() => {
      console.log('Changed filter: ', action.payload)
    }, 5000)
  }

  return next(action)
}

export const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    // Make an API call to fetch todos from the server
    client.get('todos').then(todos => {
      // Dispatch an action with the todos we received
      storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
    })
  }

  return next(action)
}


export const asyncFunctionMiddleware = storeAPI => next => action => {
// If the "action" is actually a function instead...
if (typeof action === 'function') {
  // then call the function and pass `dispatch` and `getState` as arguments
  return action(storeAPI.dispatch, storeAPI.getState)
}

// Otherwise, it's a normal action - send it onwards
return next(action)
}
