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
                <h2 className='text__h2'>{this.props.bitcoin.isComplete && this.props.bitcoin.bitcoin.name} ({this.props.bitcoin.isComplete && this.props.bitcoin.bitcoin.code})</h2>

                {this.props.bitcoin.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.bitcoin.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.bitcoin.isComplete && this.props.app.moneyCode === 'gbp' &&
                    <BitcoinBadge
                        bitcoinUsdLast={'£' + (this.props.bitcoin.bitcoin.price.gbp.last).toFixed(2)}
                        bitcoinUsdOpen={(this.props.bitcoin.bitcoin.price.gbp.open).toFixed(2)}
                        bitcoinUsdHigh={(this.props.bitcoin.bitcoin.price.gbp.high).toFixed(2)}
                        bitcoinUsdLow={(this.props.bitcoin.bitcoin.price.gbp.low).toFixed(2)}
                        bitcoinUsdChange={(this.props.bitcoin.bitcoin.price.gbp.change) + '%'}
                    />
                }
                {this.props.bitcoin.isComplete && this.props.app.moneyCode === 'usd' &&
                    <BitcoinBadge
                        bitcoinUsdLast={'$' + (this.props.bitcoin.bitcoin.price.usd.last).toFixed(2)}
                        bitcoinUsdOpen={(this.props.bitcoin.bitcoin.price.usd.open).toFixed(2)}
                        bitcoinUsdHigh={(this.props.bitcoin.bitcoin.price.usd.high).toFixed(2)}
                        bitcoinUsdLow={(this.props.bitcoin.bitcoin.price.usd.low).toFixed(2)}
                        bitcoinUsdChange={(this.props.bitcoin.bitcoin.price.usd.change) + '%'}
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
        app: state.app,
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
