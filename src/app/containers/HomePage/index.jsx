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

    createCurrencyCols(currencyName) {

        if (currencyName === 'Bitcoin') {
            var priceObj = this.props.bitcoin.bitcoin.price[this.props.app.moneyCode]
        }
        else if (currencyName === 'Ethereum') {
            var priceObj = this.props.ethereum.ethereum.price[this.props.app.moneyCode]
        }
        else if (currencyName === 'Litecoin') {
            var priceObj = this.props.litecoin.litecoin.price[this.props.app.moneyCode]
        }

        let priceAry = [
            currencyName,
            priceObj.open.toFixed(2),
            priceObj.high.toFixed(2),
            priceObj.low.toFixed(2),
            `${priceObj.change}%`,
            priceObj.last.toFixed(2)
        ]

        // let rowNamex = `${currencyName.toLowerCase()}Row`
        // rowNamex = priceAry.map((item, index) =>
        //     <td key={index}>
        //         {item}
        //     </td>
        // )

        if (currencyName === 'Bitcoin') {
            // `${currencyName.toLowerCase()}Row` = priceAry.map((item, index) =>
            bitcoinRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }

        else if (currencyName === 'Ethereum') {
            ethereumRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }

        else if (currencyName === 'Litecoin') {
            litecoinRow = priceAry.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            )
        }

    }

    render() {

        // get bitcoin row for Exchange Rate table
        if (this.props.bitcoin.isComplete) {
            this.createCurrencyCols('Bitcoin')
        }

        // get ethereum row for Exchange Rate table
        if (this.props.ethereum.isComplete) {
            this.createCurrencyCols('Ethereum')
        }

        // get litecoin row for Exchange Rate table
        if (this.props.litecoin.isComplete) {
            this.createCurrencyCols('Litecoin')
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
