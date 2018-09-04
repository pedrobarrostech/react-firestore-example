import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import messageReducer from './message/messageReducer'
import photoReducer from './photo/photoReducer'
import aboutReducer from './about/aboutReducer'

const rootReducer = combineReducers({
  message: messageReducer,
  photo: photoReducer,
  about: aboutReducer,
  firestore: firestoreReducer
})

export default rootReducer

