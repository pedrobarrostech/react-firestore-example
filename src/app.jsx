import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import './template/custom.css'
import './template/fonts.css'

import './template/images/icons/favicon.ico'

import React from 'react'
import Menu from './template/menu'
import Footer from './template/footer'
import Routes from './routes'

export default props => (
    <div>
        <Menu />
        <Routes />
        <Footer />
    </div>
)