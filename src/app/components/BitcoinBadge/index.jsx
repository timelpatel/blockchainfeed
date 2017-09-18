import React, {Component} from 'react'
import style from './style.scss'


const BitcoinBadge = (props) => {

    return (
        <table className='table__exchange-rates'>
            <thead>
                <tr>
                    <th>Last</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>{props.bitcoinUsdLast}</strong></td>
                    <td>{props.bitcoinUsdOpen}</td>
                    <td>{props.bitcoinUsdHigh}</td>
                    <td>{props.bitcoinUsdLow}</td>
                    <td>{props.bitcoinUsdChange}</td>
                </tr>
            </tbody>
        </table>
    )

}


export default BitcoinBadge
