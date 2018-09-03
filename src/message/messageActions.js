import axios from 'axios'
import { URL_API } from '../config'

const URL = `${URL_API}messages`

export const add = (data) => {
  return dispatch => {
    axios.post(URL, data)
      .then(resp => dispatch(clear()))
      .then(resp => alert('Mensagem enviada com sucesso!'))
  }
}

export const clear = () => {
  return [{
    type: 'MESSAGE_CLEAR'
  }, []]
}
