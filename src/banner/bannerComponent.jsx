import React, { Component } from 'react'
import Scroll from 'react-scroll'
import BackgroundSlideshow from 'react-background-slideshow'
import PropTypes from 'prop-types'
const Element = Scroll.Element

export default class Gallery extends Component {

  constructor (props) {
    super(props)
    this.state = {
      banners: []
    };
    this.fetchBanners = this.fetchBanners.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.fetchBanners()
  }

  fetchBanners () {
    const { firestore } = this.context.store
    firestore.collection('banners')
      .where('active', '==', '1')
      .orderBy('order') 
      .limit(5)
      .get()
        .then(snapshot => {
          const banners = []
          snapshot.forEach((doc) => {
            banners.push(doc.data().image)
          });
          this.setState({ banners })
        })
  }

  render () {
    return (
      <Element name='banner' className='element'>
        <div className='container logo'>
          <div className='row center'>
            <img alt='Artwork' className='main-logo' src={require('../template/images/artwork-light2.png')} width='400' />
          </div>
          <div className='row center margin--bottom-3x'>
            <a href='https://www.facebook.com/pedrohawt' className='btn-large waves-effect waves-light red darken-3'>Ir para o Facebook</a>
          </div>
        </div>
        <BackgroundSlideshow images={this.state.banners} />
      </Element>

    )
  }
}