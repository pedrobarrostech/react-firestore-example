import { connect } from 'react-redux'
import { fetchServices } from './serviceActions'
import ServiceList from './serviceComponent'

const mapStateToProps = (state) => {
  return {
    services: state.services
  }
}

export default connect(mapStateToProps, { fetchServices })(ServiceList)
