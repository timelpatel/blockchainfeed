import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import {fetchEthereum} from '../../actions/ethereum.js'
import Calculator from '../../components/Calculator/index.jsx'
import ExchangeRates from '../../components/ExchangeRates/index.jsx'


let bitcoinRow

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
        this.props.fetchEthereum()
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

        // `${currencyName.toLowerCase()}Row` = priceAry.map((item, index) =>
        bitcoinRow = priceAry.map((item, index) =>
            <td key={index}>
                {item}
            </td>
        )
    }

    render() {
        // Bitcoin row for Exchange Rate table
        if (this.props.bitcoin.isComplete) {
            this.createCurrencyCols(this.props.bitcoin.bitcoin.name, this.props.bitcoin.bitcoin.price.usd)
        }

        // let bitcoinRow = ''
        //
        // if (this.props.bitcoin.isComplete) {
        //     const priceObj = this.props.bitcoin.bitcoin.price.usd
        //
        //     const priceAry = [
        //         this.props.bitcoin.bitcoin.name,
        //         priceObj.open.toFixed(2),
        //         priceObj.high.toFixed(2),
        //         priceObj.low.toFixed(2),
        //         `${priceObj.change}%`,
        //         priceObj.last.toFixed(2)
        //     ]
        //
        //     bitcoinRow = priceAry.map((item, index) =>
        //         <td key={index}>
        //             {item}
        //         </td>
        //     )
        // }

        // Ethereum row for Exchange Rate table
        let ethereumRow = ''

        if (this.props.ethereum.isComplete) {
            const priceObj = this.props.ethereum.ethereum.price.usd

            const priceAry = [
                this.props.ethereum.ethereum.name,
                priceObj.open.toFixed(2),
                priceObj.high.toFixed(2),
                priceObj.low.toFixed(2),
                `${priceObj.change}%`,
                priceObj.last.toFixed(2)
            ]

            ethereumRow = priceAry.map((item, index) =>
                <td key={index}>{item}</td>
            )
        }

        return (

            <div>
                <ExchangeRates
                    bitcoinData={bitcoinRow}
                    ethereumData={ethereumRow}
                />
                <Calculator
                    bitcoinUsdLast={this.props.bitcoin.isComplete && (this.props.bitcoin.bitcoin.price.usd.last).toFixed(2)}
                    ethereumUsdLast={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.usd.last).toFixed(2)}
                />
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


export default connect(mapStateToProps, matchDispatchToProps)(HomePage)
