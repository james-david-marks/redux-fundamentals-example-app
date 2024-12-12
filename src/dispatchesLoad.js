import store from './store'
import { availableColors } from './features/filters/filtersSlice'
import { saveNewTodo } from './model/todoCollection'

export function dispatchesLoad()
{
    const unsubscribe = store.subscribe(
        () => {} //console.log('SUBSCRIBED: State after dispatch: ', store.getState())
    )

    console.log('Dispatching action')
    //store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
    store.dispatch(saveNewTodo('Learn about actions'))
    console.log('Dispatch complete')

    //const dispatchResult = store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
    const dispatchResult = store.dispatch(saveNewTodo('Learn about reducers'))
    console.log(dispatchResult)

    //store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })
    store.dispatch(saveNewTodo('Learn about stores'))

    store.dispatch({ type: 'todos/todoToggled', payload: 0 })
    store.dispatch({ type: 'todos/todoToggled', payload: 1 })
    store.dispatch({ type: 'todos/todoToggled', payload: 2 })
    store.dispatch({ type: 'todos/todoToggled', payload: 3 })
    store.dispatch({ type: 'todos/todoToggled', payload: 5 })

    store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

    store.dispatch({
    type: 'filters/colorFilterChanged',
    payload: { color: 'red', changeType: 'added' }
    })

    // store.dispatch({
    // type: 'filters/colorFilterChanged',
    // payload: { color: 'blue', changeType: 'added' }
    // })

    // store.dispatch({
    // type: 'filters/colorFilterChanged',
    // payload: { color: 'green', changeType: 'added' }
    // })

    store.dispatch({
    type: 'filters/colorFilterChanged',
    payload: { color: 'red', changeType: 'removed' }
    })

    store.dispatch({ type: 'filters/statusFilterChanged', payload: 'All' })

    store.dispatch({ type: 'todos/todoSetColor', payload: {id: 0, color: 'green'} })

    unsubscribe()

    // store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })
    store.dispatch(saveNewTodo('Try creating a store'))

    // store.dispatch({ type: 'todos/todoAdded', payload: 'Fix selected status for Filter' })
    store.dispatch(saveNewTodo('Fix selected status for Filter'))

    for(var id = 0; id < store.getState().todos.length; id++)
        {
            let color = availableColors[id%availableColors.length]
            store.dispatch({ type: 'todos/todoSetColor', payload: {id: id, color: color}})
        }
        
}
