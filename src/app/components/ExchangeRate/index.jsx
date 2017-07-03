import React from 'react'
import BitcoinData from '../../containers/BitcoinData/index.jsx'
import style from './style.js'


const ExchangeRate = () => (
    <div>
        <h2 style={style.h2}>Exchange Rates</h2>
        <BitcoinData />
    </div>
)

export default ExchangeRate;
