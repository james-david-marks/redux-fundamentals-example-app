
const initialState = {
  showEdit: false
}

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "global/showEditToggle": {
      return {
        ...state,
        showEdit: !state.showEdit
      }
    }
    default: {
      return state;
    }
  }
}

