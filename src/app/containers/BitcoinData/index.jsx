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
            bit = <p style={style.bodyCopy}>Loading Bitcoin data...</p>
        }
        if (this.props.bitcoin.isComplete) {
            bit = (
                <div>
                    {/* <p style={{...style.bodyCopy, ...style.bold}}>1 Bitcoin</p> */}
                    <p style={Object.assign({}, style.bodyCopy, style.bold)}>1 Bitcoin</p>
                    <p style={style.bodyCopy}>&#36;{this.props.bitcoin.bitcoin.bpi.USD.rate}</p>
                    <p style={style.bodyCopy}>&pound;{this.props.bitcoin.bitcoin.bpi.GBP.rate}</p>
                </div>
            )
        }
        if (this.props.bitcoin.isError) {
            bit = <p style={style.bodyCopy}>Bitcoin data not available.</p>
        }

        return (
            <div style={style.blockCurrency}>{bit}</div>
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
