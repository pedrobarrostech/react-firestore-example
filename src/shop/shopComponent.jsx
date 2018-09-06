import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
const Element = Scroll.Element

export default class Shop extends Component {
  constructor (props) {
    super(props)
    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    this.state = {
      products: []
    };
    this.fetchProducts = this.fetchProducts.bind(this)
    this.renderProducts = this.renderProducts.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    const { firestore } = this.context.store
    firestore.collection('products')
      .where('active', '==', '1')
      .get()
        .then(snapshot => {
          const products = []
          snapshot.forEach((doc) => {
            const data = doc.data()
            products.push({ link: data.link, image: data.image})
          });
          this.setState({ products })
        })
  }

  renderProducts () {
    return this.state.products.map(function(menu, i){
      return (<a href={menu.link ? menu.link : '#'} key={i} target="_blank"><img alt={menu.name} src={menu.image} /></a>)
    });
  }

  render() {
    
    return (
        <Element name="shop" className="element gray1">
          <div className='container'>
            <div className='section'>
              <div className='row'>
                <div className='col s12 center '>
                  <h2><span className='red-text text-darken-3'>L</span>oja</h2>
                  <p className='left-align light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. 
                  </p>
                  <Slider {...this.settings}>
                    { this.renderProducts() }
                  </Slider>
                </div>
              </div>
            </div>
          </div> 
        </Element>

    )
  }
}