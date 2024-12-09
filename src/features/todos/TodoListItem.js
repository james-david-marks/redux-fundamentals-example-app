import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { availableColors, capitalize } from '../filters/filtersSlice'
import { useDispatch } from 'react-redux'

const TodoListItem = ({todo, onCompletedChange}) => {
    const dispatch = useDispatch()

    function ColorDropdown(){
        // {color} == currentColor ? 'selected' : ''

        const handleSelectChange = (event) => {
            console.log(event.target.value)
            console.log(event.target)
            console.log({todo})
            dispatch({ type: 'todos/todoSetColor', payload: {"id" : todo.id, "color" : event.target.value}} )
        };

        console.log(todo.color)
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
        onCompletedChange(e.target.id)
        console.log(e.target.id)
    }

    return<Row className={todo.color}>
        <Col xs="1">{todo.id + 1}</Col>
        <Col xs="7">{todo.text}</Col>
        <Col xs="1"><input id={todo.id} type="checkbox" checked={todo.completed} onChange={handleCheckToggle} /></Col>
        <Col xs="3"><ColorDropdown /></Col>
    </Row>
}

export default TodoListItem