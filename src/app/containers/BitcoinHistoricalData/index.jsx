import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoinHistorical} from '../../actions/bitcoin.js'
import style from './style.js'


class BitcoinHistoricalData extends Component {

    componentDidMount() {
        this.props.fetchBitcoinHistorical()
    }

    render() {
        let bit = null

        if (this.props.bitcoin.isFetching) {
            bit = 'Loading Bitcoin data...'
        }
        if (this.props.bitcoin.isComplete) {
            bit = <span>{this.props.bitcoin.bitcoin.time.updated}</span>
        }
        if (this.props.bitcoin.isError) {
            bit = 'Bitcoin data not available.'
        }

        return (
            <div>
                <p style={style.bodyCopy}>{bit}</p>
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
    return bindActionCreators({fetchBitcoinHistorical: fetchBitcoinHistorical}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BitcoinHistoricalData)
