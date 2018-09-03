import React, { Component } from 'react'
import Scroll from 'react-scroll'
import MdMenu from 'react-icons/lib/md/menu';

const Link = Scroll.Link;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
export default class Home extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      const item = arguments[0];
      if(item !== 'banner') {
        document.getElementsByClassName(`${item}-menu`)[0].classList.add('active')
      }
    })

    scrollSpy.update()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  burgerToggle () {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper container">
            <Link className="brand-logo" to="banner" spy={true} smooth={true} offset={-50} duration={500}>
              {/* <img src={require('./images/logo.png')} width="200" /> */}
              <div className='logo-light'><b>a<span>rt</span>w<span>o</span>rk</b></div>
            </Link>
            <div className="navWide">              
              <ul className="wideDiv right hide-on-med-and-down">
                <li><Link className="about-menu" to="about" spy={true} smooth={true} offset={-50} duration={500} >Sobre</Link></li>
                <li><Link className="services-menu" to="services" spy={true} smooth={true} offset={-50} duration={500} >Serviços</Link></li>
                <li><Link className="bio-menu" to="bio" spy={true} smooth={true} offset={-50} duration={500} >Quem sou</Link></li>
                <li><Link className="gallery-menu" to="gallery" spy={true} smooth={true} offset={-50} duration={500} >Galeria</Link></li>
                {/* <li><Link className="shop-menu" to="shop" spy={true} smooth={true} offset={-50} duration={500} >Loja</Link></li>
                <li><Link className="contact-menu" to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contato</Link></li> */}
                <li><Link className="localization-menu" to="localization" spy={true} smooth={true} offset={-50} duration={500} >Localização</Link></li>
              </ul>
            </div>
            <div className="navNarrow">
              <MdMenu className="fa fa-bars fa-2x material-icons" onClick={this.burgerToggle} />
            </div>
          </div>
          <div className="navNarrow">
            <ul className="narrowLinks">
            <li><Link className="about-menu" to="about" spy={true} smooth={true} offset={-50} duration={500} >Sobre</Link></li>
            <li><Link className="services-menu" to="services" spy={true} smooth={true} offset={-50} duration={500} >Serviços</Link></li>
            <li><Link className="bio-menu" to="bio" spy={true} smooth={true} offset={-50} duration={500} >Quem sou</Link></li>
            <li><Link className="gallery-menu" to="gallery" spy={true} smooth={true} offset={-50} duration={500} >Galeria</Link></li>
            {/* <li><Link className="shop-menu" to="shop" spy={true} smooth={true} offset={-50} duration={500} >Loja</Link></li>
            <li><Link className="contact-menu" to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contato</Link></li> */}
            <li><Link className="localization-menu" to="localization" spy={true} smooth={true} offset={-50} duration={500} >Localização</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}