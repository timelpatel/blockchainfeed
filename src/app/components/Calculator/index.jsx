import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import {fetchEthereum} from '../../actions/ethereum.js'
import style from './style.scss'


class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numberCrypto: 1.00,
            numberMoney: 0.00
        }

        this.updateMoney = this.updateMoney.bind(this)
        this.updateCrypto = this.updateCrypto.bind(this)
        this.updateSelectCrypto = this.updateSelectCrypto.bind(this)
        this.updateSelectMoney = this.updateSelectMoney.bind(this)
    }

    updateMoney(event) {
        this.setState({
            numberCrypto: event.target.value,
            numberMoney: (this.props.bitcoinUsdFloatRate * event.target.value).toFixed(2)
        })
    }

    updateCrypto(event) {
        this.setState({
            numberMoney: event.target.value,
            numberCrypto: (event.target.value / this.props.bitcoinUsdFloatRate).toFixed(2)
        })
    }

    updateSelectCrypto(event) {
        // if (event.target.value === 'Etherium') {
        //     this.props.fetchEthereum()
        // }
    }

    updateSelectMoney(event) {
        // console.log(event.target.value)
    }

    render() {
        return (

            <div className='container__blockCalculator'>
                <h2 className='text__h2'>Calculator</h2>

                <form>
                    <div className='form__formGroup'>
                        <input
                            className='form__textField'
                            min='1.00'
                            name='numberCrypto'
                            onChange={this.updateMoney}
                            step='1.00'
                            type='number'
                            value={this.state.numberCrypto}
                        />
                        <select
                            className='form__selectField'
                            onChange={this.updateSelectCrypto}
                        >
                            <option value='Bitcoin'>Bitcoin</option>
                            <option value='Etherium'>Etherium</option>
                        </select>
                    </div>

                    <div className='form__formGroup'>
                        <input
                            className='form__textField'
                            min='0.01'
                            name='numberMoney'
                            onChange={this.updateCrypto}
                            step='1.00'
                            type='number'
                            value={this.state.numberMoney}
                        />
                        <select
                            className='form__selectField'
                            onChange={this.updateSelectMoney}
                        >
                            <option value='US Dollar'>US Dollar</option>
                            <option value='British Pound'>British Pound</option>
                        </select>
                    </div>
                </form>
            </div>

        )
    }

}


export default Calculator
