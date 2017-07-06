import React from 'react'
import EthereumData from '../../containers/EthereumData/index.jsx'
import style from './style.js'


const EthereumPage = () => (
    <div style={style.page}>
        <h2 style={style.h2}>Etheteum</h2>
        <EthereumData />
    </div>
)

export default EthereumPage;
