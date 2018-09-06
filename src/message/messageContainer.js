import { connect } from 'react-redux'
import Message from './messageComponent'

export default connect((state) => ({
  message: state.firestore.ordered.message
}))(Message)
