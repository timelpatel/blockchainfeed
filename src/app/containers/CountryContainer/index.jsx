import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchBitcoin} from '../../actions/bitcoin.js'


class CountryContainer extends Component {

    componentDidMount() {
        this.props.fetchBitcoin()
    }

    render() {
        let bit = null

        if (this.props.bitcoin.isFetching) {
            bit = <p>Loading Bitcoin data...</p>
        }
        if (this.props.bitcoin.isComplete) {
            bit = <p>{this.props.bitcoin.bitcoin.bpi.GBP.code} {this.props.bitcoin.bitcoin.bpi.GBP.rate}</p>
        }
        if (this.props.bitcoin.isError) {
            bit = <p>Bitcoin data not available. Please reload.</p>
        }

        return (
            <div>
                <p>1 Bitcoin</p>
                {bit}
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


export default connect(mapStateToProps, matchDispatchToProps)(CountryContainer)
