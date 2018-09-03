const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_INFO':
      return {
        ...state,
        info: {}
      }
    default:
      return state
  }
}
