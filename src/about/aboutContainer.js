import { connect } from 'react-redux'
import About from './aboutComponent'

export default connect((state) => ({
  about: state.firestore.ordered.about
}))(About)
