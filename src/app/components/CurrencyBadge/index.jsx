import React, {Component} from 'react'
import style from './style.scss'


const CurrencyBadge = (props) => {

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
                    <td><strong>{props.currencyLast}</strong></td>
                    <td>{props.currencyOpen}</td>
                    <td>{props.currencyHigh}</td>
                    <td>{props.currencyLow}</td>
                    <td>{props.currencyChange}</td>
                </tr>
            </tbody>
        </table>
    )

}


export default CurrencyBadge
