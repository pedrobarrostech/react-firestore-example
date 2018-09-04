import app from '@firebase/app'

const config = {
  apiKey: 'AIzaSyA-sZn5GZBW2SU17xB6-JpuYSgSP3IDh08',
  authDomain: 'almanaque-62204.firebaseapp.com',
  databaseURL: 'https://almanaque-62204.firebaseio.com',
  projectId: 'almanaque-62204',
  storageBucket: 'almanaque-62204.appspot.com',
  messagingSenderId: '581326886241'
}

app.initializeApp(config)

export default app
