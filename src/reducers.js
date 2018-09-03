import { combineReducers } from 'redux'
import messageReducer from './message/messageReducer'
import photoReducer from './photo/photoReducer'
import aboutReducer from './about/aboutReducer'

const rootReducer = combineReducers({
  message: messageReducer,
  photo: photoReducer,
  about: aboutReducer
})

export default rootReducer
