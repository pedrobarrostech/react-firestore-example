// import React from 'react'
// import ReactDOM from 'react-dom'
// import { applyMiddleware, createStore } from 'redux'
// import axiosMiddleware from 'redux-axios-middleware'
// import axios from 'axios'
// import { Provider } from 'react-redux'

// import promise from 'redux-promise'
// import multi from 'redux-multi'
// import thunk from 'redux-thunk'

// import App from './app'
// import reducers from './reducers'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
//     && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = applyMiddleware(axiosMiddleware(axios), thunk, multi, promise)(createStore)(reducers, devTools)
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// , document.getElementById('app'))

/*
  src/index.js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from './store'
// import './index.css'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

/*
 * src/store.js
 * No initialState
*/
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
} // from Firebase Console
const rfConfig = {} // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore through Firebase
firebase.firestore()

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
)(createStore)

// Create store with reducers and initial state
// const initialState = {}
// const store = createStoreWithFirebase(rootReducer, initialState)

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
