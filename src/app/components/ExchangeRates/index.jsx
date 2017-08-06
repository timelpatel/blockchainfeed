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
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link
                                className='link'
                                to='/bitcoin'
                            >
                                Bitcoin
                            </Link>
                        </td>
                        <td>&#36;{props.bitcoinUsdFloatRate}</td>
                    </tr>
                    <tr>
                        <td>
                            <Link
                                className='link'
                                to='/ethereum'
                            >
                                Ethereum
                            </Link>
                        </td>
                        <td>&#36;{props.ethereumRateUsd}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

)

export default ExchangeRates;
