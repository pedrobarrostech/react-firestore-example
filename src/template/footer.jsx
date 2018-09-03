import React, { Component } from 'react'
import Scroll from 'react-scroll'
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaYoutube from 'react-icons/lib/fa/youtube';
import MdInfo from 'react-icons/lib/md/info'
import MdPicture from 'react-icons/lib/md/photo'
import MdWork from 'react-icons/lib/md/work'
// import MdContact from 'react-icons/lib/md/call'
// import MdShop from 'react-icons/lib/md/shopping-cart'
import MdLocation from 'react-icons/lib/md/location-on'
import MdMood from 'react-icons/lib/md/mood'

const Link = Scroll.Link;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
export default class Footer extends Component {

  componentDidMount() {
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

  render() {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'><span className='red-text text-darken-3'>A</span>rtwork <span className='red-text text-darken-3'>T</span>atueria</h5>
              <p className='grey-text text-lighten-4'>Estúdio criado pelo Tatuador Pedro Henrique Alves, especialista em tatuagem Old School Tradicional. Expressando sua arte através da pele de seus clientes, prezando pela máxima qualidade.</p>


            </div>
            <div className='col l3 s12'>
              <h5 className='white-text'><span className='red-text text-darken-3'>M</span>apa do <span className='red-text text-darken-3'>S</span>ite</h5>
              <ul>
                <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500} ><MdInfo className='red-text text-darken-3'  /> Sobre</Link></li>
                <li><Link to="services" spy={true} smooth={true} offset={-50} duration={500} ><MdWork  className='red-text text-darken-3'  /> Serviços</Link></li>
                <li><Link to="bio" spy={true} smooth={true} offset={-50} duration={500} ><MdMood  className='red-text text-darken-3'  /> Quem sou</Link></li>    
                <li><Link to="gallery" spy={true} smooth={true} offset={-50} duration={500} ><MdPicture  className='red-text text-darken-3'  /> Galeria</Link></li>
                {/* 
                <li><Link to="shop" spy={true} smooth={true} offset={-50} duration={500} ><MdShop  className='red-text text-darken-3'  /> Loja</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500} ><MdContact  className='red-text text-darken-3'  /> Contato</Link></li> 
                */}
                <li><Link to="localization" spy={true} smooth={true} offset={-50} duration={500} ><MdLocation  className='red-text text-darken-3'  /> Localização</Link></li>
              </ul>
            </div>
            <div className='col l3 s12'>
              <h5 className='white-text'><span className='red-text text-darken-3'>R</span>edes <span className='red-text text-darken-3'>S</span>ociais</h5>
              <ul>
                <li><a href='https://www.facebook.com/pedrohawt' rel='noopener noreferrer' target='_blank'><FaFacebook  className='red-text text-darken-3'  /> Facebook</a></li>
                <li><a href='https://www.instagram.com/pedrohenriqueawt'rel='noopener noreferrer' target='_blank'><FaInstagram className='red-text text-darken-3' />  Instagram</a></li>
                <li><a href='https://www.youtube.com/channel/UCQ05RIpXIYO0YsJZ3k5Y1Hg' rel='noopener noreferrer' target='_blank'><FaYoutube   className='red-text text-darken-3' />  Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            Desenvolvido por <a className='brown-text text-lighten-3' href='http://pedrobarros.info'>Pedro Barros</a>
          </div>
        </div>
      </footer>
    )
  }
}