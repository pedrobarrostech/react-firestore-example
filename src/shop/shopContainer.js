import { connect } from 'react-redux'
import Shop from './shopComponent'

export default connect((state) => ({
  products: state.firestore.ordered.products
}))(Shop)
