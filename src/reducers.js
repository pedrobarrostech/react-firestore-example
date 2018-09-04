import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import messageReducer from './message/messageReducer'
import photoReducer from './photo/photoReducer'

const rootReducer = combineReducers({
  message: messageReducer,
  photo: photoReducer,
  firestore: firestoreReducer
})

export default rootReducer

