import { URL_API } from '../config'
const URL = `${URL_API}products/active`

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export function fetchProducts () {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      request: {
        url: URL
      }
    }
  }
}
