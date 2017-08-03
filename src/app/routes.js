import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BitcoinPage from './containers/BitcoinPage/index.jsx'
import EthereumPage from './containers/EthereumPage/index.jsx'
import HomePage from './containers/HomePage/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/bitcoin' component={BitcoinPage}/>
        <Route path='/ethereum' component={EthereumPage}/>
    </div>
)

export default Routes
