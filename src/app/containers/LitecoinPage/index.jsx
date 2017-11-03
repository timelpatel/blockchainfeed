import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchLitecoin} from '../../actions/litecoin.js'
import CurrencyBadge from '../../components/CurrencyBadge/index.jsx'
import LineGraph from '../../components/LineGraph/index.jsx'
import style from './style.scss'


class LitecoinPage extends Component {

    componentDidMount() {
        this.props.fetchLitecoin()
    }

    render() {
        return (

            <div className='container__page'>
                <h2 className='text__h2'>{this.props.litecoin.isComplete && this.props.litecoin.litecoin.name} ({this.props.litecoin.isComplete && this.props.litecoin.litecoin.code})</h2>

                {this.props.litecoin.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.litecoin.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.litecoin.isComplete && this.props.app.moneyCode === 'gbp' &&
                    <CurrencyBadge
                        currencyLast={'£' + (this.props.litecoin.litecoin.price.gbp.last).toFixed(2)}
                        currencyOpen={(this.props.litecoin.litecoin.price.gbp.open).toFixed(2)}
                        currencyHigh={(this.props.litecoin.litecoin.price.gbp.high).toFixed(2)}
                        currencyLow={(this.props.litecoin.litecoin.price.gbp.low).toFixed(2)}
                        currencyChange={(this.props.litecoin.litecoin.price.gbp.change) + '%'}
                    />
                }
                {this.props.litecoin.isComplete && this.props.app.moneyCode === 'usd' &&
                    <CurrencyBadge
                        currencyLast={'$' + (this.props.litecoin.litecoin.price.usd.last).toFixed(2)}
                        currencyOpen={(this.props.litecoin.litecoin.price.usd.open).toFixed(2)}
                        currencyHigh={(this.props.litecoin.litecoin.price.usd.high).toFixed(2)}
                        currencyLow={(this.props.litecoin.litecoin.price.usd.low).toFixed(2)}
                        currencyChange={(this.props.litecoin.litecoin.price.usd.change) + '%'}
                    />
                }

                <LineGraph
                    data='../../../_stub/ltc-historical-data-static.json'
                />
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        app: state.app,
        litecoin: state.litecoin,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchLitecoin: fetchLitecoin}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(LitecoinPage)
