import React from 'react'
import BitcoinData from '../../containers/BitcoinData/index.jsx'
import EthereumData from '../../containers/EthereumData/index.jsx'
import style from './style.js'


const ExchangeRates = () => (
    <div>
        <h2 style={style.h2}>Exchange Rates</h2>
        <BitcoinData />
        <EthereumData />
    </div>
)

export default ExchangeRates;
