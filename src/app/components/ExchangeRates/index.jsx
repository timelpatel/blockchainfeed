import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.js'


const ExchangeRates = (props) => (

    <div>
        <div style={style.blockExchangeRate}>
            <h2 style={style.blockExchangeRate__h2}>Exchange Rates</h2>

            <table style={style.blockExchangeRate__table}>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={style.blockExchangeRate__table_td}>
                            <Link
                                style={style.link}
                                to='/bitcoin'
                            >
                                Bitcoin
                            </Link>
                        </td>
                        <td style={style.blockExchangeRate__table_td}>&#36;{props.bitcoinUsdFloatRate}</td>
                    </tr>
                    <tr>
                        <td style={style.blockExchangeRate__table_td}>
                            <Link
                                style={style.link}
                                to='/ethereum'
                            >
                                Ethereum
                            </Link>
                        </td>
                        <td style={style.blockExchangeRate__table_td}>&#36;{props.ethereumRateUsd}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

)

export default ExchangeRates;
