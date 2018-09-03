const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state,
        title: action.payload
      }
    case 'MESSAGE_SEARCHED':
      return { ...state,
        list: action.payload
      }
    case 'MESSAGE_CLEAR':
      return { ...state,
        descriptitletion: ''
      }
    default:
      return state
  }
}
