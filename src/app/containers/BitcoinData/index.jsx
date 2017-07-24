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
        return (
            <div style={style.blockCurrency}>

                {this.props.bitcoin.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.bitcoin.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.bitcoin.isComplete &&
                    <div>
                        <p style={Object.assign({}, style.bodyCopy, style.bold)}>1 Bitcoin</p>
                        <p style={style.bodyCopy}>&#36;{this.props.bitcoin.bitcoin.bpi.USD.rate}</p>
                        <p style={style.bodyCopy}>&pound;{this.props.bitcoin.bitcoin.bpi.GBP.rate}</p>
                    </div>
                }

            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        bitcoin: state.bitcoin,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchBitcoin: fetchBitcoin}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BitcoinData)
