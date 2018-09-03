import axios from 'axios'
// https://medium.com/@emersonthis/instagram-on-websites-the-new-landscape-62c91d733894
// instagramtoken.com
const URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=208144707.a5db56d.d4c8741c341b47bc85c8036ddc903eef'

export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchInstagramPhotos () {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: URL,
      headers: []
    })

    request.then((response) => {
      dispatch({
        type: FETCH_POSTS,
        payload: response
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_POSTS,
        payload: err
      })
    })

    return {
      type: FETCH_POSTS,
      payload: request
    }
  }
}
