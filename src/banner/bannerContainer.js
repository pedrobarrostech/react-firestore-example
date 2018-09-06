import { connect } from 'react-redux'
import Banner from './bannerComponent'

export default connect((state) => ({
  banner: state.firestore.ordered.banner
}))(Banner)
