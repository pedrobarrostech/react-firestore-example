import { connect } from 'react-redux'
import Info from './infoComponent'

export default connect((state) => ({
  info: state.firestore.ordered.info
}))(Info)
