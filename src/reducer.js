import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import globalReducer from './globalReducer'

const rootReducer = combineReducers({
  global: globalReducer,
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer