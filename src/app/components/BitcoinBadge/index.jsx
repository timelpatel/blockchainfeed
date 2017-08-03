import React, {Component} from 'react'
import style from './style.js'


const BitcoinBadge = (props) => {

    return (
        <div style={style.blockCurrency}>
            <p style={Object.assign({}, style.bodyCopy, style.bold)}>BTC / Bitcoin</p>
            <p style={style.bodyCopy}>&#36;{props.bitcoinUsdFloatRate}</p>
        </div>
    )

}


export default BitcoinBadge
