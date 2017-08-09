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
            currentCrypto: 'btc',
            currentMoney: 'usd',
            numberCrypto: 1.00,
            numberMoney: this.props.bitcoinUsdFloatRate
        }

        this.changeMoney = this.changeMoney.bind(this)
        this.changeCrypto = this.changeCrypto.bind(this)
        this.updateSelectCrypto = this.updateSelectCrypto.bind(this)
        this.updateSelectMoney = this.updateSelectMoney.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != this.nextProps) {
            this.calculateMoney()
        }
    }

    changeCrypto(event) {
        this.setState(
            {numberCrypto: event.target.value}, () => {
                this.calculateMoney()
            }
        )
    }

    changeMoney(event) {
        this.setState(
            {numberMoney: event.target.value}, () => {
                this.calculateCrypto()
            }
        )

        // this.setState(prevState => (
        //     {numberMoney: !prevState.numberMoney}, () => {
        //         this.calculateCrypto()
        //     }
        // ))
    }

    calculateCrypto() {
        this.setState(prevState => ({
            numberCrypto: (this.state.numberMoney / this.props.bitcoinUsdFloatRate).toFixed(2)
        }))
    }

    calculateMoney() {
        let cryptoRate = 0
        if (this.state.currentCrypto === 'btc') {cryptoRate = this.props.bitcoinUsdFloatRate}
        else if (this.state.currentCrypto === 'eth') {cryptoRate = this.props.ethereumRateUsd}

        this.setState({ numberMoney: (cryptoRate * this.state.numberCrypto).toFixed(2) })
    }

    updateSelectCrypto(event) {
        this.setState({currentCrypto: event.target.value}), () => {
            this.calculateMoney()
        }
    }

    updateSelectMoney(event) {
        // this.setState({currentMoney: event.target.value}), () => {
        //     this.calculateCrypto()
        // }
    }

    render() {
        return (

            <div className='container__calculator'>
                <h2 className='text__h2'>Calculator</h2>

                <form>
                    <div className='form__form-group'>
                        <input
                            className='form__text-field'
                            min='1.00'
                            name='numberCrypto'
                            onChange={this.changeCrypto}
                            step='1.00'
                            type='number'
                            value={this.state.numberCrypto}
                        />
                        <select
                            className='form__select-field'
                            name='selectCrypto'
                            onChange={this.updateSelectCrypto}
                        >
                            <option value='btc'>Bitcoin</option>
                            <option value='eth'>Etherium</option>
                        </select>
                    </div>

                    <div className='form__form-group'>
                        <input
                            className='form__text-field'
                            min='0.01'
                            name='numberMoney'
                            onChange={this.changeMoney}
                            step='1.00'
                            type='number'
                            value={this.state.numberMoney}
                        />
                        <select
                            className='form__select-field'
                            name='selectMoney'
                            onChange={this.updateSelectMoney}
                        >
                            <option value='usd'>US Dollar</option>
                            <option value='gbp'>British Pound</option>
                        </select>
                    </div>
                </form>
            </div>

        )
    }

}


export default Calculator
