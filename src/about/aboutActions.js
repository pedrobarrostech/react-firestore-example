import axios from 'axios'
import { URL_API } from '../config'
const URL = `${URL_API}sections/1`

export const FETCH_ABOUT = 'FETCH_ABOUT'

export function fetchAbout () {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: URL,
      headers: []
    })

    request.then((response) => {
      dispatch({
        type: FETCH_ABOUT,
        payload: response
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ABOUT,
        payload: err
      })
    })

    return {
      type: FETCH_ABOUT,
      payload: request
    }
  }
}
