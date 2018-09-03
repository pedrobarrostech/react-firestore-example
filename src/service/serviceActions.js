import axios from 'axios'
import { URL_API } from '../config'
const URL = `${URL_API}services/active`

export const FETCH_SERVICES = 'FETCH_SERVICES'

export function fetchServices () {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: URL,
      headers: []
    })

    request.then((response) => {
      dispatch({
        type: FETCH_SERVICES,
        payload: response
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_SERVICES,
        payload: err
      })
    })

    return {
      type: FETCH_SERVICES,
      payload: request
    }
  }
}
