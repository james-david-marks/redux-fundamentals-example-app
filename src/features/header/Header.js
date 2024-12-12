import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodo } from '../../model/todoCollection'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the "todo added" action with this text
  //    dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // And clear out the text input

      dispatch(saveNewTodo(trimmedText))

      setText('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default Header