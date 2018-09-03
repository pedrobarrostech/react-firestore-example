import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Message from '../message/messageContainer'

const Element = Scroll.Element

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Element name="contact" className="element">
        <div className='container'>
          <div className='section'>
            <div className='row'>
              <div className='col s12 center'>
                <h2><span className='red-text text-darken-3'>C</span>ontato</h2>
                <p className='left-align light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.
								</p>
                <Message />
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}