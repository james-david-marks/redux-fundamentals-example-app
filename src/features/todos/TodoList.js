
import React from 'react'
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../model/todoCollection'

import TodoListItem from './TodoListItem'


//const selectTodos = state => state.todos
const selectFilteredTodos = state => {

  let byCompletedTodos = state.todos

  switch(state.filters.status)
  {
      case "Active":
        byCompletedTodos = state.todos.filter(todo => !todo.completed)
          break;
      case "Completed":
        byCompletedTodos = state.todos.filter(todo => todo.completed)
          break;
      default:
          break;
  }

  const selectedColors = state.filters.colors
  let filteredTodos = byCompletedTodos

  if(selectedColors.length > 0)
  {
    filteredTodos = byCompletedTodos.filter(todo => selectedColors.includes(todo.color))
  }
 
  return filteredTodos
}

const TodoList = () => {

  const dispatch = useDispatch()

  const onCompletedChange = (todo) =>  {
    dispatch(updateTodo(todo))
    //dispatch({ type: 'todos/todoToggled', payload: id} )
  }

  const todos = useSelector(selectFilteredTodos)
  //const todos = useSelector(state => state.todos)

  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} onCompletedChange={onCompletedChange}/>
    //return<div key={todo.id}>{todo.id}</div>
  })

  return <Container ><div className="todo-list">{renderedListItems}</div></Container>

}

export default TodoList