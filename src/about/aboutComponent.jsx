import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Scroll from 'react-scroll'
// import { URL_ASSETS } from '../config'

const Element = Scroll.Element
class About extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { firestore } = this.context.store
    firestore.get('about').then((res) => console.log(res.data()))
  }

  render() {
    return (
      <Element name="about" className="element">
        <div className='row'>
          {/* <div className='col s12 m6 bg-left' style={this.state.style}></div>
          <div className='col s12 m6 gray1 box'>
            <div className='block'>
              <h2 className='center'><span className='red-text text-darken-3'>B</span>em-vindo á <span className='red-text text-darken-3'>A</span>rtwork <span className='red-text text-darken-3'>T</span>atueria</h2>
              <br />
              <p className='red-text text-darken-3'>{this.state.about.info}</p>
              <br />
              <p className='light'>{this.state.about.description}</p>
            </div>
          </div> */}
        </div>
      </Element>
    )
  }
}

export default connect((state) => ({
  about: state.firestore.ordered.about
}))(About)
