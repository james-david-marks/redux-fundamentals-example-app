export const availableColors = ['blue', 'green', 'orange', 'purple', 'red']

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

export const StatusFilters = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
}

const initialState = {
    status: "Active",
    colors: [],
  };

  export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case "filters/statusFilterChanged": {
        return {
          ...state,
          status: action.payload,
        };
      }
      case "filters/colorFilterChanged": {
        let { color, changeType } = action.payload;
        const theColors = [...state.colors];
        var finalColors = [];
        switch (changeType) {
          case "added": {
            if (!state.colors.includes(color)) {
              theColors.push(color);
            }
            finalColors = theColors;
            break;
          }
          case "removed": {
            finalColors = theColors.filter(
              (existingColor) => existingColor !== color
            );
            break;
          }
          default: {
            finalColors = theColors;
            break;
          }
        }
        return {
          ...state,
          colors: finalColors,
        };
      }
      default:
        return state;
    }
  }
  