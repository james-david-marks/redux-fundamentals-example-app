const initialState = [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ];
  
  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  }
  
  // Use the initialState as a default value
  export default function todosReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case "todos/todoAdded": {
        return [
          ...state,
          {
            id: nextTodoId(state),
            text: action.payload,
            completed: false,
          },
        ];
      }
      case "todos/todoToggled": {
        return state.map((todo) => {
          if (todo.id !== action.payload && todo.id != Number(action.payload)) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        });
      }
      case "todos/todoSetColor": {
        return state.map((todo) => {
          if (todo.id !== action.payload.id && todo.id != Number(action.payload.id)) {
            return todo;
          }
          return {
            ...todo,
            color: action.payload.color,
          };
        });
      }
      case "todos/todoSetAllCompleted": {
        return state.map((todo) => {
          return {
            ...todo,
            completed: true,
          };
        });
      }
      case "todos/todoClearAllCompleted": {
        return state.map((todo) => {
          return {
            ...todo,
            completed: false,
          };
        });
      }      default:
        return state;
    }
  }
  