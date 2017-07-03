import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchEthereum} from '../../actions/ethereum.js'
import style from './style.js'


class EthereumData extends Component {

    componentDidMount() {
        this.props.fetchEthereum()
    }

    render() {
        let eth = null

        if (this.props.ethereum.isFetching) {
            eth = <span>Loading Ethereum data...</span>
        }
        if (this.props.ethereum.isComplete) {
            eth = <span>{this.props.ethereum.ethereum.symbol} {this.props.ethereum.ethereum.price.usd}</span>
        }
        if (this.props.ethereum.isError) {
            eth = <span>Ethereum data not available.</span>
        }

        return (
            <div>
                <p style={style.bodyCopy}>1 Ethereum</p>
                <p style={style.bodyCopy}>{eth}</p>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        ethereum: state.ethereum,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchEthereum: fetchEthereum}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(EthereumData)
