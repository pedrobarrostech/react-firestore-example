import { connect } from 'react-redux'
import { fetchBanners } from './bannerActions'
import Banner from './bannerComponent'

const mapStateToProps = (state) => {
  return {
    banners: state.banners
  }
}

export default connect(mapStateToProps, { fetchBanners })(Banner)
