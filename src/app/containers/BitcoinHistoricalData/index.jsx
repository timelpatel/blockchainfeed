import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoinHistorical} from '../../actions/bitcoin.js'
import style from './style.js'


class BitcoinHistoricalData extends Component {

    componentWillMount() {
        this.props.fetchBitcoinHistorical()
    }

    render() {
        let bit = null

        if (this.props.bitcoin.isFetching) {
            bit = 'Loading Bitcoin history...'
        }
        if (this.props.bitcoin.isComplete) {
            bit = 1
        }
        if (this.props.bitcoin.isError) {
            bit = 'Bitcoin history not available.'
        }

        return (
            <div>DELETE THIS COMPONENT???</div>
        )
    }

}


function mapStateToProps(state) {
    return {
        BitcoinHistorical: state.BitcoinHistorical,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchBitcoinHistorical: fetchBitcoinHistorical}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BitcoinHistoricalData)
