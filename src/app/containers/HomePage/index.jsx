import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import {fetchEthereum} from '../../actions/ethereum.js'
import {fetchLitecoin} from '../../actions/litecoin.js'
import Calculator from '../../components/Calculator/index.jsx'
import ExchangeRates from '../../components/ExchangeRates/index.jsx'


let bitcoinRow
let ethereumRow
let litecoinRow

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
        this.props.fetchEthereum()
        this.props.fetchLitecoin()
    }

    createCurrencyCols(currencyName, priceObj) {

        const priceAry = [
            currencyName,
            priceObj.open.toFixed(2),
            priceObj.high.toFixed(2),
            priceObj.low.toFixed(2),
            `${priceObj.change}%`,
            priceObj.last.toFixed(2)
        ];

        if (currencyName == 'Bitcoin') {
            // `${currencyName.toLowerCase()}Row` = priceAry.map((item, index) =>
            bitcoinRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }

        if (currencyName == 'Ethereum') {
            ethereumRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }

        if (currencyName == 'Litecoin') {
            litecoinRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }
    }

    render() {
        // Bitcoin row for Exchange Rate table
        if (this.props.bitcoin.isComplete) {
            if (this.props.app.moneyCode === 'usd') {
                this.createCurrencyCols(this.props.bitcoin.bitcoin.name, this.props.bitcoin.bitcoin.price.usd)
            }
            else if (this.props.app.moneyCode === 'gbp') {
                this.createCurrencyCols(this.props.bitcoin.bitcoin.name, this.props.bitcoin.bitcoin.price.gbp)
            }
        }

        // Ethereum row for Exchange Rate table
        if (this.props.ethereum.isComplete) {
            if (this.props.app.moneyCode === 'usd') {
                this.createCurrencyCols(this.props.ethereum.ethereum.name, this.props.ethereum.ethereum.price.usd)
            }
            else if (this.props.app.moneyCode === 'gbp') {
                this.createCurrencyCols(this.props.ethereum.ethereum.name, this.props.ethereum.ethereum.price.gbp)
            }
        }

        // Litecoin row for Exchange Rate table
        if (this.props.litecoin.isComplete) {
            if (this.props.app.moneyCode === 'usd') {
                this.createCurrencyCols(this.props.litecoin.litecoin.name, this.props.litecoin.litecoin.price.usd)
            }
            else if (this.props.app.moneyCode === 'gbp') {
                this.createCurrencyCols(this.props.litecoin.litecoin.name, this.props.litecoin.litecoin.price.gbp)
            }
        }


        return (

            <div>
                <ExchangeRates
                    bitcoinData={bitcoinRow}
                    ethereumData={ethereumRow}
                    litecoinData={litecoinRow}
                />

                <Calculator
                    bitcoinGbpLast={this.props.bitcoin.isComplete && (this.props.bitcoin.bitcoin.price.gbp.last).toFixed(2)}
                    bitcoinUsdLast={this.props.bitcoin.isComplete && (this.props.bitcoin.bitcoin.price.usd.last).toFixed(2)}
                    ethereumGbpLast={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.gbp.last).toFixed(2)}
                    ethereumUsdLast={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.usd.last).toFixed(2)}
                    litecoinGbpLast={this.props.litecoin.isComplete && (this.props.litecoin.litecoin.price.gbp.last).toFixed(2)}
                    litecoinUsdLast={this.props.litecoin.isComplete && (this.props.litecoin.litecoin.price.usd.last).toFixed(2)}
                />
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        app: state.app,
        bitcoin: state.bitcoin,
        ethereum: state.ethereum,
        litecoin: state.litecoin
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBitcoin: fetchBitcoin,
        fetchEthereum: fetchEthereum,
        fetchLitecoin: fetchLitecoin
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(HomePage)
