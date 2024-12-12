import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { availableColors, capitalize } from '../filters/filtersSlice'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../model/todoCollection'

const TodoListItem = ({todo, onCompletedChange}) => {
    const dispatch = useDispatch()

    function ColorDropdown(){
        // {color} == currentColor ? 'selected' : ''

        const handleSelectChange = (event) => {
            console.log(event.target)
            console.log(todo)
            //dispatch({ type: 'todos/todoSetColor', payload: {"id" : todo.id, "color" : event.target.value}} )
            const todoMutated = {...todo, color : event.target.value }
            dispatch(updateTodo(todoMutated))
        };

        const colorDropdownEntries = ['', ...availableColors]
        const colorOptions =
        colorDropdownEntries.map((color, index) => (
            <option className={"option " + color} value={color} key={index} >{color}</option>
        ))
     
        return (
        <div>
        <select className="select" value={todo.color} onChange={handleSelectChange} name="colors" id="colors">
            {colorOptions}
        </select>
        </div>
      )
    }
 
    const handleCheckToggle = (e) => {
        const todoMutated = {...todo, completed : !todo.completed }
        dispatch(updateTodo(todoMutated))
        //onCompletedChange(todoMutated)
    }

    return<Row className={todo.color}>
        <Col xs="1">{todo.id}</Col>
        <Col xs="7">{todo.text}</Col>
        <Col xs="1"><input id={todo.id} type="checkbox" checked={todo.completed} onChange={handleCheckToggle} /></Col>
        <Col xs="3"><ColorDropdown /></Col>
    </Row>
}

export default TodoListItem