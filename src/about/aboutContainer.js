import { connect } from 'react-redux'
import { fetchAbout } from './aboutActions'
import About from './aboutComponent'

const mapStateToProps = (state) => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps, { fetchAbout })(About)
