import React, {Component} from 'react'
import style from './style.scss'


class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cryptoCode: 'btc',
            moneyCode: 'usd',
            textCrypto: 1.00,
            textMoney: this.props.bitcoinUsdLast
        }

        this.handleMoneyChange = this.handleMoneyChange.bind(this)
        this.handleCryptoChange = this.handleCryptoChange.bind(this)
        this.handleCryptoCodeChange = this.handleCryptoCodeChange.bind(this)
        this.handleMoneyCodeChange = this.handleMoneyCodeChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != this.nextProps) {
            this.calculateMoney()
        }
    }

    handleCryptoChange(event) {
        this.setState({textCrypto: event.target.value}, () => {
            this.calculateMoney()
        })
    }

    handleMoneyChange(event) {
        this.setState({textMoney: event.target.value}, () => {
            this.calculateCrypto()
        })
    }

    calculateCrypto() {
        let cryptoRate = 0
        if (this.state.moneyCode === 'usd') {cryptoRate = this.props.bitcoinUsdLast}
        else if (this.state.moneyCode === 'gbp') {cryptoRate = this.props.bitcoinGbpLast}
        this.setState({ textCrypto: (this.state.textMoney / cryptoRate).toFixed(2) })
    }

    calculateMoney() {
        let cryptoRate = 0
        if (this.state.cryptoCode === 'btc') {cryptoRate = this.props.bitcoinUsdLast}
        else if (this.state.cryptoCode === 'eth') {cryptoRate = this.props.ethereumUsdLast}

        this.setState({ textMoney: (cryptoRate * this.state.textCrypto).toFixed(2) })
    }

    handleCryptoCodeChange(event) {
        this.setState({cryptoCode: event.target.value}, () => {
            this.calculateMoney()
        })
    }

    handleMoneyCodeChange(event) {
        this.setState({moneyCode: event.target.value}, () => {
            this.calculateCrypto()
        })
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
                            onChange={this.handleCryptoChange}
                            step='1.00'
                            type='number'
                            value={this.state.textCrypto}
                        />
                        <select
                            className='form__select-field'
                            onChange={this.handleCryptoCodeChange}
                        >
                            <option value='btc'>Bitcoin</option>
                            <option value='eth'>Etherium</option>
                        </select>
                    </div>

                    <div className='form__form-group'>
                        <input
                            className='form__text-field'
                            min='0.01'
                            name='textMoney'
                            onChange={this.handleMoneyChange}
                            step='1.00'
                            type='number'
                            value={this.state.textMoney}
                        />
                        <select
                            className='form__select-field'
                            name='selectMoney'
                            onChange={this.handleMoneyCodeChange}
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
