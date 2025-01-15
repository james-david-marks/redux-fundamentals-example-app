//import { client } from '../api/client'
import { dispatchesLoad } from '../dispatchesLoad'
import { availableColors } from '../features/filters/filtersSlice'
import axios from 'axios';
import { todosLoaded } from '../features/todos/todosActions';

//const url = 'fakeApi/todos'
//const postUrl = 'fakeApi/todos'
//const hostserver = 'http://localhost:8080'
const hostserver = 'http://jimmarks.net'
const url = hostserver + '/apihost/api/getTodos'
const postUrl = hostserver + '/apihost/api/addTodo'
const postUpdateUrl = hostserver + '/apihost/api/updateTodo'

const client = axios

export const fetchSomeData = (dispatch, getState) => {
  // Make an async HTTP request
  client.get(url).then(
    todos => {
      // Dispatch an action with the todos we received
      const stateBefore = getState()
      console.log('Todos before dispatch: ', stateBefore.todos.length)
      console.log(todos)

      dispatch({ type: 'todos/todosLoaded', payload: todos })
      // Check the updated store state after dispatching
      const allTodos = getState().todos
      console.log('Number of todos after loading: ', allTodos.length)

      const stateAfter = getState()
      console.log('Todos after dispatch: ', stateAfter.todos.length)
            
      dispatchesLoad()

      const stateAfterDispatches = getState()
      console.log('Todos after more dispatches: ', stateAfterDispatches.todos.length)
    }
  )
}

export async function fetchTodos(dispatch, getState) {
  const response = await client.get(url)
  const stateBefore = getState()
  console.log('Todos before dispatch: ', stateBefore.todos.length)
  //dispatch({ type: 'todos/todosLoaded', payload: response.data })
  dispatch(todosLoaded(response.data))
  const stateAfter = getState()
  console.log('Todos after dispatch: ', stateAfter.todos.length)
  //dispatchesLoad()
  const stateAfterAdditional = getState()
  console.log('Todos after additional dispatchs: ', stateAfterAdditional.todos.length)
}

// export function saveNewTodo(text)
// {
//   return async function saveNewTodoThunk(dispatch, getState) {
//     const initialTodo = { text }
//     const response = await client.post(postUrl, { todo: initialTodo })
//     dispatch({ type: 'todos/todoAddedByThunk', payload: response.data.todo })
//     let color = availableColors[response.todo.id%availableColors.length]
//     dispatch({ type: 'todos/todoSetColor', payload: {id: response.todo.id, color: color} })
//   }
// }

export function saveNewTodo(text)
{
  return async function saveNewTodoThunk(dispatch, getState) {
    //const initialTodo = { text }
    const headers = {'Content-Type' : 'application/json'}
    const response = await client.post(postUrl, { text: text }, {headers: headers})
    dispatch({ type: 'todos/todoAddedByThunk', payload: response.data.todo })
    //let color = availableColors[response.todo.id%availableColors.length]
    //dispatch({ type: 'todos/todoSetColor', payload: {id: response.todo.id, color: color} })
  }
}

export function updateTodo(todo)
{
  return async function updateTodoThunk(dispatch, getState) {
    const headers = {'Content-Type' : 'application/json'}
    const response = await client.post(postUpdateUrl, todo, {headers: headers})
    dispatch({ type: 'todos/todoUpdatedByThunk', payload: response.data.todo })
  }
}

export function axiosSaveNewTodo(text)
{
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }
    const response = await client.post(postUrl, { todo: initialTodo })
    dispatch({ type: 'todos/todoAddedByThunk', payload: response.data.todo })
    let color = availableColors[response.todo.id%availableColors.length]
    dispatch({ type: 'todos/todoSetColor', payload: {id: response.todo.id, color: color} })
  }
}

