import { connect } from 'react-redux'
import { fetchInstagramPhotos } from './photoActions'
import PhotoList from './photoComponent'

const mapStateToProps = (state) => {
  return {
    photoList: state.photoList
  }
}

export default connect(mapStateToProps, { fetchInstagramPhotos })(PhotoList)
