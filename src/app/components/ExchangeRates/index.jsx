import React from 'react'
import { Link } from 'react-router-dom'
import BitcoinData from '../../containers/BitcoinData/index.jsx'
import EthereumData from '../../containers/EthereumData/index.jsx'
import style from './style.js'


const ExchangeRates = () => (
    <div style={style.blockExchangeRate}>
        <h2 style={style.h2}>Exchange Rates</h2>
        <Link to='/bitcoin'><BitcoinData /></Link>
        <Link to='/ethereum'><EthereumData /></Link>
    </div>
)

export default ExchangeRates;
