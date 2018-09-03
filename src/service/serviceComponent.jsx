import React, { Component } from 'react'
import Scroll from 'react-scroll'

const Element = Scroll.Element

export default class ServiceList extends Component {
  constructor (props) {
    super(props)
    this.icons = ['palette', 'flash_on', 'spa']
    this.state = {
      services: []
    };
    this.fetchServices = this.fetchServices.bind(this)
    this.renderServices = this.renderServices.bind(this)
  }

  componentDidMount() {
    this.fetchServices()
  }

  fetchServices() {
    this.props.fetchServices().payload.then((res) => {
      const services = res.data.data
      this.setState({ services })
    })
  }

  renderServices () {
    const icons = this.icons
    return this.state.services.map(function(service, i){
      return (
        <div className='col s12 m4' key={i}>
          <div className='icon-block'>
            <h2 className='center red-text text-darken-3'><i className='material-icons'>{ icons[i] }</i></h2>
            <h5 className='center'>{service.name}</h5>
            <p className='light'>{service.description}</p>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <Element name="services" className="element">
        <div className='container'>
          <div className='section services'>

            <div className='col s12 center'>
              <h2><span className='red-text text-darken-3'>S</span>erviços</h2>
            </div>

            <div className='row'>
              { this.renderServices () }
            </div>

          </div>
        </div>
      </Element>
    )
  }
}