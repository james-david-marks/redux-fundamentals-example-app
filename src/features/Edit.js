import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const showEditStatus  = state => {
    const showEditStatus = state.global.showEdit;
    return showEditStatus
}

const Edit = () => {
    const show = useSelector(showEditStatus)
    const dispatch = useDispatch()

    let html = show ? <input type="text" placeholder="What needs to be done?"></input> : <></>

    return (
        <>
        {html}
        </>
    )
}

export default Edit