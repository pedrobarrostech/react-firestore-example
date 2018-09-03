import { connect } from 'react-redux'
import { fetchProducts } from './shopActions'
import Shop from './shopComponent'

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchProducts })(Shop)
