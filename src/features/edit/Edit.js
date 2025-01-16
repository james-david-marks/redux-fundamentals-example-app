import React from 'react'
import { Row, Col } from 'reactstrap';
import Header from '../header/Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ColorDropdown from '../common/ColorDropdown'

const showEditStatus  = state => {
    const showEditStatus = state.global.showEdit;
    return showEditStatus
}
const showNewTodoColor  = state => {
    return state.global.newTodoColor;
}

const Edit = () => {
    const show = useSelector(showEditStatus)
    const color = useSelector(showNewTodoColor)
    const dispatch = useDispatch()

    const handleTouchEnd = e => {
        handleMouseUp(e);
    }
    const handleMouseUp = e => {
        console.log('mouse event on input (edit)');
        dispatch({ type: 'global/showEditToggle'});
    }
    const onColorChange = (color) =>
    {
        dispatch({ type: 'global/newTodoColor', payload: color})
    }

    let colorDropDown = <ColorDropdown onChange={onColorChange}/>
    
    let html = show ? <div className="todo-list">
                    <Row className={color}>
                        <Col xs="10"><input 
                            type="text" 
                            placeholder="What needs to be done?"
                            onMouseUp={(handleMouseUp)}
                            onTouchEnd={(handleTouchEnd)}                  
                        /></Col>
                        <Col xs="2">{colorDropDown}</Col>
                    </Row>
                    </div>
                    : <></>

    let htmlHeader = show ? <></> : <Header />

    return (
        <>
        {htmlHeader}
        {html}
        </>
    )
}

export default Edit