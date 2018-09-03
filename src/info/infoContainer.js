import { connect } from 'react-redux'
import { fetchInfo } from './infoActions'
import Info from './infoComponent'

const mapStateToProps = (state) => {
  return {
    info: state.info
  }
}

export default connect(mapStateToProps, { fetchInfo })(Info)
