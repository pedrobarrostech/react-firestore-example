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
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
export default function configureStore () {
  return createStore(
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
