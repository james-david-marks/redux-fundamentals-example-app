import React from 'react'
import { Row, Col } from 'reactstrap';
//import { availableColors } from '../filters/filtersSlice'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../model/todoCollection'
import ColorDropdown from '../common/ColorDropdown'

const TodoListItem = ({todo, onCompletedChange}) => {
    const dispatch = useDispatch()

    // function ColorDropdown(){
    //     // {color} == currentColor ? 'selected' : ''

    //     const handleSelectChange = (event) => {
    //         console.log(event.target)
    //         console.log(todo)
    //         //dispatch({ type: 'todos/todoSetColor', payload: {"id" : todo.id, "color" : event.target.value}} )
    //         const todoMutated = {...todo, color : event.target.value }
    //         dispatch(updateTodo(todoMutated))
    //     };

    //     const colorDropdownEntries = ['', ...availableColors]
    //     const colorOptions =
    //     colorDropdownEntries.map((color, index) => (
    //         <option className={"option " + color} value={color} key={index} >{color}</option>
    //     ))
     
    //     return (
    //     <div>
    //     <select className="select" value={todo.color} onChange={handleSelectChange} name="colors" id="colors">
    //         {colorOptions}
    //     </select>
    //     </div>
    //   )
    // }
 
    const onColorChange = (color) => {
        const todoMutated = {...todo, color : color }
        dispatch(updateTodo(todoMutated))
    };    

    const handleArchiveToggle = (e) => {
        const todoMutated = {...todo, archived : !todo.archived }
        dispatch(updateTodo(todoMutated))
    }
    const handleCheckToggle = (e) => {
        const todoMutated = {...todo, completed : !todo.completed }
        dispatch(updateTodo(todoMutated))
    }

    let archiveId = 'archive' + todo.id.toString();
    let checkId = 'check' + todo.id.toString();
 
    return<Row className={todo.color}>
        <Col xs="7">{todo.text}</Col>
        <Col xs="1"><input id={archiveId} type="checkbox" checked={todo.archived} onChange={handleArchiveToggle} /></Col>
        <Col xs="1"><input id={checkId} type="checkbox" checked={todo.completed} onChange={handleCheckToggle} /></Col>
        <Col xs="3"><ColorDropdown color={todo.color} onChange={onColorChange} /></Col>
    </Row>
}

export default TodoListItem