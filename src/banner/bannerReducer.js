const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BANNERS':
      return {
        ...state,
        banners: {}
      }
    default:
      return state
  }
}
