import React, {Component} from 'react'
import style from './style.scss'


const EthereumBadge = (props) => {

    return (
        <div className='container__blockCurrency'>
            <p className='text__bodyCopy text__bold'>ETC / Etheteum</p>
            <p className='text__bodyCopy'>&#36;{props.ethereumRateUsd}</p>
            <p className='text__bodyCopy'>&pound;{props.ethereumRateGbp}</p>
        </div>
    )

}

export default EthereumBadge
