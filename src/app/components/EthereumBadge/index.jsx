import React, {Component} from 'react'
import style from './style.js'


const EthereumBadge = (props) => {

    return (
        <div style={style.blockCurrency}>
            <p style={Object.assign({}, style.bodyCopy, style.bold)}>ETC / Etheteum</p>
            <p style={style.bodyCopy}>&#36;{props.ethereumRateUsd}</p>
            <p style={style.bodyCopy}>&pound;{props.ethereumRateGbp}</p>
        </div>
    )

}

export default EthereumBadge
