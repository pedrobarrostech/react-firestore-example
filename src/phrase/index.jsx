import React, { Component } from 'react'
import Scroll from 'react-scroll'
import { URL_ASSETS } from '../config'
const Element = Scroll.Element

export default class Phrase extends Component {
  constructor (props) {
		super(props)
		this.state = {
			style: []
		};
		this.fetchImage = this.fetchImage.bind(this)
	}

	componentDidMount () {
    this.fetchImage()
	}

	fetchImage () {
		const imgSrc = `${URL_ASSETS}uploads/bkg.jpg`
    this.setState({ style: { backgroundImage: `url(${imgSrc})`}})
	}

  render() {
    return (
      <Element name="phrase" className="element">
        <div className='parallax-container valign-wrapper' style={this.state.style}>
          <div className='section no-pad-bot'>
            <div className='container'>
              <div className='row center'>
                <h2 className='header col s12 dark'>
                  Da <span className='red-text text-darken-3'>mente</span> pro papel, do papel pra <span className='red-text text-darken-3'>pele</span> e da pele pra <span className='red-text text-darken-3'>eternidade</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}
