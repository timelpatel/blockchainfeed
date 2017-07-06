import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import style from './style.js'


class BitcoinData extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
    }

    render() {
        let bit = null

        if (this.props.bitcoin.isFetching) {
            bit = 'Loading Bitcoin data...'
        }
        if (this.props.bitcoin.isComplete) {
            bit = <span>&#36;{this.props.bitcoin.bitcoin.bpi.USD.rate}</span>
        }
        if (this.props.bitcoin.isError) {
            bit = 'Bitcoin data not available.'
        }

        return (
            <div style={style.blockCurrency}>
                <p style={style.bodyCopy}>1 Bitcoin</p>
                <p style={style.currencyValue}>{bit}</p>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        bitcoin: state.bitcoin,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchBitcoin: fetchBitcoin}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BitcoinData)
