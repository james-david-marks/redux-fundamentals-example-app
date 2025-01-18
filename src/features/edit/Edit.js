import React from 'react'
import { Label, Row, Col } from 'reactstrap';
import Header from '../header/Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ColorDropdown from '../common/ColorDropdown'
import { DbTextField, DbButtonSecondary, DbButton } from "../common/Controls";
import { saveNewTodo } from '../../model/todoCollection'

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
        dispatch({ type: 'global/showEditToggle'});
    }
    const handleSave = e => {
        const trimmedText = document.getElementById('edittext').value.trim();
        console.log('text: ' + trimmedText + ", color: " + color)
        dispatch(saveNewTodo(trimmedText, color))
        dispatch({ type: 'global/showEditToggle'});
    }
    const handleCancel = e => {
        dispatch({ type: 'global/showEditToggle'});
    }
    const onColorChange = (color) =>
    {
        dispatch({ type: 'global/newTodoColor', payload: color})
    }

    let colorDropDown = <ColorDropdown color={color} onChange={onColorChange}/>
    
    let html = show ? <div className="todo-edit">
                        <Row className={color} >
                            <Col xs="12"><input 
                                type="text" 
                                name="edittext"
                                id="edittext"
                                placeholder="What needs to be done?"
                                //onMouseUp={(handleMouseUp)}
                                //onTouchEnd={(handleTouchEnd)}                  
                            /></Col>
                        </Row>
                        <Row className={color}>
                                <Col xs="8" /><Col xs="1"><Label>Color</Label></Col><Col xs="3">{colorDropDown}</Col>
                        </Row>
                        <div className="todo-editform" >
                            <Row>
                                <Col xs="8" />
                                <Col xs="4">
                                    <div className="todo-editform-buttonpanel" >
                                        <DbButton label="Save" onClick={handleSave} />
                                        <DbButtonSecondary label="Cancel" onClick={handleCancel} />
                                    </div>                                
                                </Col>
                            </Row>
                        </div>
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