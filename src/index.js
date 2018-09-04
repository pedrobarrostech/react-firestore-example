import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { reduxFirestore } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA-sZn5GZBW2SU17xB6-JpuYSgSP3IDh08',
  authDomain: 'almanaque-62204.firebaseapp.com',
  databaseURL: 'https://almanaque-62204.firebaseio.com',
  projectId: 'almanaque-62204',
  storageBucket: 'almanaque-62204.appspot.com',
  messagingSenderId: '581326886241'
}

const rfConfig = {} // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore through Firebase
firebase.firestore()

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
)(createStore)

export default function configureStore () {
  return createStoreWithFirebase(
    rootReducer,
    applyMiddleware(thunk)
  )
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
