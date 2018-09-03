import axios from 'axios'
import { URL_API } from '../config'
const URL = `${URL_API}sections/2`

export const FETCH_INFO = 'FETCH_INFO'

export function fetchInfo () {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: URL,
      headers: []
    })

    request.then((response) => {
      dispatch({
        type: FETCH_INFO,
        payload: response
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_INFO,
        payload: err
      })
    })

    return {
      type: FETCH_INFO,
      payload: request
    }
  }
}
