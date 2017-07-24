import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import {fetchEthereum} from '../../actions/ethereum.js'
import style from './style.js'


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

    // componentDidMount() {
    //     this.props.fetchBitcoin()
    // }

    updateMoney(event) {
        this.setState({
            numberCrypto: (parseFloat(event.target.value)).toFixed(2),
            numberMoney: (parseFloat(this.props.bitcoin.bitcoin.bpi.USD.rate.replace(/,/g, '')) * event.target.value).toFixed(2)
        })
    }

    updateCrypto(event) {
        this.setState({
            numberMoney: (parseFloat(event.target.value)).toFixed(2),
            numberCrypto: (parseFloat(event.target.value) / (this.props.bitcoin.bitcoin.bpi.USD.rate.replace(/,/g, ''))).toFixed(2)
        })
    }

    updateSelectCrypto(event) {
        if (event.target.value === "Etherium") {
            this.props.fetchEthereum()
        }
    }

    updateSelectMoney(event) {
        console.log(event.target.value)
    }

    render() {

        // if (this.props.ethereum.isComplete) {
        //     console.log('ethereum.isComplete')
        // }

        return (
            <div style={style.blockCalculator}>
                <h2 style={style.h2}>Calculator</h2>

                {this.props.bitcoin.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.bitcoin.isError && <p style={style.bodyCopy}>Calculator not available.</p>}

                {this.props.bitcoin.isComplete &&
                <form>
                    <div style={style.formGroup}>
                        <input
                            min="1.00"
                            name="numberCrypto"
                            onChange={this.updateMoney}
                            step="1.00"
                            style={style.textField}
                            type="number"
                            value={this.state.numberCrypto}
                        />
                        <select
                            onChange={this.updateSelectCrypto}
                            style={style.selectField}
                        >
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Etherium">Etherium</option>
                        </select>
                    </div>

                    <div style={style.formGroup}>
                        <input
                            min="0.01"
                            name="numberMoney"
                            onChange={this.updateCrypto}
                            step="1.00"
                            style={style.textField}
                            type="number"
                            value={this.state.numberMoney}
                        />
                        <select
                            onChange={this.updateSelectMoney}
                            style={style.selectField}
                        >
                            <option value="US Dollar">US Dollar</option>
                            <option value="British Pound">British Pound</option>
                        </select>
                    </div>
                </form>
                }
            </div>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        bitcoin: state.bitcoin,
        ethereum: state.ethereum,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBitcoin: fetchBitcoin,
        fetchEthereum: fetchEthereum
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Calculator)
