import React, {Component} from 'react'
import style from './style.scss'


const BitcoinBadge = (props) => {

    return (
        <div className='container__blockCurrency'>
            <p className='text__bodyCopy text__bold'>BTC / Bitcoin</p>
            <p className='text__bodyCopy'>&#36;{props.bitcoinUsdFloatRate}</p>
        </div>
    )

}


export default BitcoinBadge
