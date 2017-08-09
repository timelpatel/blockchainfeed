import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import {fetchEthereum} from '../../actions/ethereum.js'
import Calculator from '../../components/Calculator/index.jsx'
import ExchangeRates from '../../components/ExchangeRates/index.jsx'


class HomePage extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
        this.props.fetchEthereum()
    }

    render() {

        return(

            <div>
                <ExchangeRates
                    bitcoinUsdFloatRate={this.props.bitcoin.isComplete && (this.props.bitcoin.bitcoin.bpi.USD.rate_float).toFixed(2)}
                    ethereumRateUsd={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.usd).toFixed(2)}
                    ethereumRateGbp={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.gbp).toFixed(2)}
                />
                <Calculator
                    bitcoinUsdFloatRate={this.props.bitcoin.isComplete && (this.props.bitcoin.bitcoin.bpi.USD.rate_float).toFixed(2)}
                    ethereumRateUsd={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.usd).toFixed(2)}
                    ethereumRateGbp={this.props.ethereum.isComplete && (this.props.ethereum.ethereum.price.gbp).toFixed(2)}
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
