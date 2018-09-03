import React, { Component } from 'react'
import Scroll from 'react-scroll'
import { URL_ASSETS } from '../config'
const Element = Scroll.Element

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      about: {},
      style: {}
    }
    this.fetchAbout = this.fetchAbout.bind(this)
  }

  componentDidMount () {
    this.fetchAbout()
  }

  fetchAbout () {
    this.props.fetchAbout().payload.then((res) => {
      const imgSrc = `${URL_ASSETS}${res.data.data.image}`
      this.setState({ about: res.data.data })
      this.setState({ style: { backgroundImage: `url(${imgSrc})`}})
    })
  }

  render () {
    return (
      <Element name="about" className="element">
        <div className='row'>
          <div className='col s12 m6 bg-left' style={this.state.style}></div>
          <div className='col s12 m6 gray1 box'>
            <div className='block'>
              <h2 className='center'><span className='red-text text-darken-3'>B</span>em-vindo á <span className='red-text text-darken-3'>A</span>rtwork <span className='red-text text-darken-3'>T</span>atueria</h2>
              <br />
              <p className='red-text text-darken-3'>{this.state.about.info}</p>
              <br />
              <p className='light'>{this.state.about.description}</p>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}