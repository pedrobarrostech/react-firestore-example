import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add } from './messageActions'
import Message from './messageComponent'

const mapStateToProps = state => ({data: state})
const mapDispatchToProps = dispatch => bindActionCreators({ add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Message)

