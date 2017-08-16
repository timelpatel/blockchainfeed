import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'
import BitcoinBadge from '../../components/BitcoinBadge/index.jsx'
import LineGraph from '../../components/LineGraph/index.jsx'
import style from './style.scss'


class BitcoinPage extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
    }

    render() {
        return (

            <div className='container__page'>
                <h2 className='text__h2'>Bitcoin (BTC)</h2>

                {this.props.bitcoin.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.bitcoin.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.bitcoin.isComplete &&
                    <BitcoinBadge
                        bitcoinUsdLast={(this.props.bitcoin.bitcoin.price.usd.last).toFixed(2)}
                    />
                }

                <LineGraph
                    data="../../../_stub/bitcoin-historical-data-static.json"
                />
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


export default connect(mapStateToProps, matchDispatchToProps)(BitcoinPage)
