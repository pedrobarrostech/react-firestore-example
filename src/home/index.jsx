import React, { Component } from 'react'
import About from '../about/aboutContainer'
import PhotoList from '../photo/photoContainer'
import ServiceList from '../service/serviceContainer'
import Info from '../info/infoContainer'
import Video from '../video'
import Phrase from '../phrase'
import Banner from '../banner/bannerContainer'
import Map from '../map'
// import Shop from '../shop/shopContainer'
// import Contact from '../contact'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Banner />
        <About />
        <ServiceList />
        <Info />
        <Video />
        <PhotoList />
        <Phrase />
        {/* 
          <Shop /> 
          <Contact />  
        */}
        <Map />
      </div>
    )
  }
}
