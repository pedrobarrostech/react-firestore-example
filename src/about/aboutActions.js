// import firebase from '../firebaseConfig'

export const FETCH_ABOUT = 'FETCH_ABOUT'

export function fetchAbout () {
  return (dispatch) => {
    // return firebase.database().ref('about').once('value')
  }
}

// export function fetchAbout () {
//   return (dispatch) => {
//     const request = axios({
//       method: 'GET',
//       url: URL,
//       headers: []
//     })

//     request.then((response) => {
//       dispatch({
//         type: FETCH_ABOUT,
//         payload: response
//       })
//     })
//     .catch((err) => {
//       dispatch({
//         type: FETCH_ABOUT,
//         payload: err
//       })
//     })

//     return {
//       type: FETCH_ABOUT,
//       payload: request
//     }
//   }
// }
