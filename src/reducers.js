import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import photoReducer from './photo/photoReducer'

const rootReducer = combineReducers({
  photo: photoReducer,
  firestore: firestoreReducer
})

export default rootReducer

