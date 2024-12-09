import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import { availableColors, capitalize } from '../filters/filtersSlice'
import { StatusFilters } from '../filters/filtersSlice'

const selectTotalRemainingTodos = state => {
    const remainingTodos = state.todos.filter(todo => !todo.completed)
    return remainingTodos.length
}

const selectCheckedColors  = state => {
    const checkedColors = state.filters.colors;
    return checkedColors
}

const selectedStatus  = state => {
    const selectedStatus = state.filters.status;
    return selectedStatus
}

const RemainingTodos = ({ count }) => {
const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color, index) => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <div key={index}>
        <label >
            <input
            type="checkbox"
            name={color}
            checked={checked}
            onChange={handleChange}
            />
            <span
            className="color-block"
            style={{
                backgroundColor: color,
            }}
            ></span>
            {capitalize(color)}
        </label>
      </div>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  )
}

const Footer = () => {
const colors = useSelector(selectCheckedColors)
const status = useSelector(selectedStatus)
const dispatch = useDispatch()

const todosRemaining = useSelector(selectTotalRemainingTodos)

const onColorChange = (color, changeType) => {
    dispatch({ type: 'filters/colorFilterChanged', payload: { color, changeType} })
    console.log('Color change: ', { color, changeType })
}
    
const onStatusChange = (status) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: status })
    console.log('Status change: ', status)
}

const onMarkAllCompleted = () => {
    dispatch({ type: 'todos/todoSetAllCompleted' })
}

const onClearAllCompleted = () => {
    dispatch({ type: 'todos/todoClearAllCompleted' })
}


  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onMarkAllCompleted}>Mark All Completed</button>
        <button className="button" onClick={onClearAllCompleted}>Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
 )
}

export default Footer
