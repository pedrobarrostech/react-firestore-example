const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PHOTO_LIST':
      return {
        ...state,
        photoList: {}
      }
    default:
      return state
  }
}
