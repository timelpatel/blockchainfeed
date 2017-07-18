import React from 'react'
// import BitcoinHistoricalData from '../../containers/BitcoinHistoricalData/index.jsx'
import BitcoinData from '../../containers/BitcoinData/index.jsx'
import LineGraph from '../../containers/LineGraph/index.jsx'
import style from './style.js'


const BitcoinPage = () => (
    <div style={style.page}>
        <h2 style={style.h2}>Bitcoin (BTC)</h2>
        <BitcoinData />
        <LineGraph
            data="../../_stub/bitcoin-historical-data-static.json"
        />
    </div>
)

export default BitcoinPage;
