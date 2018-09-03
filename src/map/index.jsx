import React from 'react'
import Scroll from 'react-scroll'

const Element = Scroll.Element

export default props => (
  <Element name="localization" className="element gray1">
    <div className='container'>
      <div className='section'>
        <div className='row'>
          <div className='col s12 center '>
            <h2><span className='red-text text-darken-3'>L</span>ocalização</h2>
            <p className='left-align light'>
              Estamos localizados na cidade de Matão na Rua Sinharinha Frota interior de São Paulo. Venha conhecer o Estúdio e marcar uma sessão.
            </p>
          </div>
        </div>
      </div>
    </div> 
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.4567543998924!2d-48.36553838546095!3d-21.60711829821697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91fd5b4f8c8db%3A0x1f4506bb560be119!2sR.+Sinharinha+Frota%2C+Mat%C3%A3o+-+SP!5e0!3m2!1spt-BR!2sbr!4v1512041222813'
        width='100%'
        title='localization'
        height='450'>
      </iframe>
    </div>
  </Element>
)
