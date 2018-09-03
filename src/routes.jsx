import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home'

export default () => (
    <BrowserRouter>
        <div>
            <Route path='/' component={Home} />
        </div>
    </BrowserRouter>
)