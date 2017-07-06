import React from 'react'
import EtheteumData from '../../containers/EtheteumData/index.jsx'
import style from './style.js'


const EtheteumPage = () => (
    <div style={style.page}>
        <h2 style={style.h2}>Etheteum</h2>
        <EthereumData />
    </div>
)

export default EtheteumPage;
