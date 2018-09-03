import { URL_API } from '../config'
import axios from 'axios'
const URL = `${URL_API}banners/active`

export const FETCH_BANNERS = 'FETCH_BANNERS'

export function fetchBanners () {
  return (dispatch) => {
    const request = axios({
      method: 'GET',
      url: URL,
      headers: []
    })

    request.then((response) => {
      dispatch({
        type: FETCH_BANNERS,
        payload: response
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BANNERS,
        payload: err
      })
    })

    return {
      type: FETCH_BANNERS,
      payload: request
    }
  }
}
