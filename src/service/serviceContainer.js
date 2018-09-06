import { connect } from 'react-redux'
import Service from './serviceComponent'

export default connect((state) => ({
  service: state.firestore.ordered.service
}))(Service)
