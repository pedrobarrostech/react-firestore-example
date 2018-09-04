import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'

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

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.fetchAbout();
  }

  fetchAbout () {
    const { firestore } = this.context.store
    firestore.get('about').then(snapshot => {
      snapshot.forEach((doc) => {
        const aboutData = doc.data()
        this.setState({ about: aboutData })
        this.setState({ style: { backgroundImage: `url(${aboutData.image})`}})
      });
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