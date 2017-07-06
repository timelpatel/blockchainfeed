import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BitcoinPage from './components/BitcoinPage/index.jsx'
import EthereumPage from './components/EthereumPage/index.jsx'
import ExchangeRates from './components/ExchangeRates/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={ExchangeRates}/>
        <Route path='/bitcoin' component={BitcoinPage}/>
        <Route path='/ethereum' component={EthereumPage}/>
    </div>
)

export default Routes
