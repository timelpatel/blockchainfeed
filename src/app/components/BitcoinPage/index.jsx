import React from 'react'
import BitcoinHistoricalData from '../../containers/BitcoinHistoricalData/index.jsx'
import style from './style.js'


const BitcoinPage = () => (
    <div style={style.page}>
        <h2 style={style.h2}>Bitcoin Historical Data</h2>
        <BitcoinHistoricalData />
    </div>
)

export default BitcoinPage;
