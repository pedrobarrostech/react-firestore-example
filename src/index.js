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
  apiKey: 'AIzaSyCNGyDPjXrWuIQRaK-pOM7BnxFbBqTaK5Q',
  authDomain: 'artwork-admin.firebaseapp.com',
  databaseURL: 'https://artwork-admin.firebaseio.com',
  projectId: 'artwork-admin',
  storageBucket: 'artwork-admin.appspot.com',
  messagingSenderId: '173993774803'
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
