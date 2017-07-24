import React from 'react'
import { Link } from 'react-router-dom'
import BitcoinData from '../../containers/BitcoinData/index.jsx'
import Calculator from '../../containers/Calculator/index.jsx'
import EthereumData from '../../containers/EthereumData/index.jsx'
import style from './style.js'


const ExchangeRates = () => (
    <div>
        <div style={style.blockExchangeRate}>
            <h2 style={style.blockExchangeRate__h2}>Exchange Rates</h2>

            <Link
                style={style.link}
                to='/bitcoin'
            >
                <BitcoinData />
            </Link>

            <Link
                style={style.link}
                to='/ethereum'
            >
                <EthereumData />
            </Link>
        </div>

        <Calculator />
    </div>
)

export default ExchangeRates;
