import React, { Component } from 'react'
import Scroll from 'react-scroll'
import PropTypes from 'prop-types'
const Element = Scroll.Element

export default class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      style: {}
    };
    this.fetchInfo = this.fetchInfo.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.fetchInfo()
  }

  fetchInfo() {
    const { firestore } = this.context.store
    firestore.collection('sections').doc('BSbTDTOyUaYbaZkEpyYu').get()
      .then(snapshot => {
        const infoData = snapshot.data()
        this.setState({ info: infoData })
        this.setState({ style: { backgroundImage: `url(${infoData.image})`}})
      })
  }

  render() {
    return (
      <Element name="bio" className="element">
        <div className='row'>
          <div className='col s12 m6 gray1 box'>
            <div className='block'>
              <h2 className='center'><span className='red-text text-darken-3'>P</span>edro <span className='red-text text-darken-3'>H</span>enrique</h2><br />
              <p className='red-text text-darken-3'>{this.state.info.info}</p>
              <br />
              <p className='light'>{this.state.info.description}</p>
            </div>
          </div>
          <div className='col s12 m6 bg-right' style={this.state.style}></div>
        </div>
      </Element>
    )
  }
}