import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchEthereum} from '../../actions/ethereum.js'
import CurrencyBadge from '../../components/CurrencyBadge/index.jsx'
import LineGraph from '../../components/LineGraph/index.jsx'
import style from './style.scss'


class EthereumPage extends Component {

    componentDidMount() {
        this.props.fetchEthereum()
    }

    render() {
        return (

            <div className='container__page'>
                <h2 className='text__h2'>Etheteum (ETC)</h2>

                {this.props.ethereum.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.ethereum.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.ethereum.isComplete && this.props.app.moneyCode === 'gbp' &&
                    <CurrencyBadge
                        currencyLast={'£' + (this.props.ethereum.ethereum.price.gbp.last).toFixed(2)}
                        currencyOpen={(this.props.ethereum.ethereum.price.gbp.open).toFixed(2)}
                        currencyHigh={(this.props.ethereum.ethereum.price.gbp.high).toFixed(2)}
                        currencyLow={(this.props.ethereum.ethereum.price.gbp.low).toFixed(2)}
                        currencyChange={(this.props.ethereum.ethereum.price.gbp.change) + '%'}
                    />
                }
                {this.props.ethereum.isComplete && this.props.app.moneyCode === 'usd' &&
                    <CurrencyBadge
                        currencyLast={'$' + (this.props.ethereum.ethereum.price.usd.last).toFixed(2)}
                        currencyOpen={(this.props.ethereum.ethereum.price.usd.open).toFixed(2)}
                        currencyHigh={(this.props.ethereum.ethereum.price.usd.high).toFixed(2)}
                        currencyLow={(this.props.ethereum.ethereum.price.usd.low).toFixed(2)}
                        currencyChange={(this.props.ethereum.ethereum.price.usd.change) + '%'}
                    />
                }

                <LineGraph
                    data='../../../_stub/eth-historical-data-static.json'
                />
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        app: state.app,
        ethereum: state.ethereum,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchEthereum: fetchEthereum}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(EthereumPage)
