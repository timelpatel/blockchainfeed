import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'


const ExchangeRates = (props) => (

    <div>
        <div className='container__exchange-rates'>
            <h2 className='text__h2--exchange-rates'>Exchange Rates</h2>

            <table className='table__exchange-rates'>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Change</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{props.bitcoinData}</tr>
                    <tr>{props.ethereumData}</tr>
                </tbody>
            </table>

        </div>
    </div>

)

export default ExchangeRates;
