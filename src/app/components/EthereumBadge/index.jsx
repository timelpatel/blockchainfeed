import React, {Component} from 'react'
import style from './style.scss'


const EthereumBadge = (props) => {

    return (
        <div className='container__blockCurrency'>
            <p className='text__bodyCopy text__bold'>ETC / Etheteum</p>
            <p className='text__bodyCopy'>&#36;{props.ethereumUsdLast}</p>
            <p className='text__bodyCopy'>&pound;{props.ethereumGbpLast}</p>
        </div>
    )

}

export default EthereumBadge
