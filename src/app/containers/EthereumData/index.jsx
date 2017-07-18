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
            eth = <p style={style.bodyCopy}>Loading Ethereum data...</p>
        }
        if (this.props.ethereum.isComplete) {
            eth = (
                <div>
                    <p style={Object.assign({}, style.bodyCopy, style.bold)}>1 Ethereum</p>
                    <p style={style.bodyCopy}>&#36;{this.props.ethereum.ethereum.price.usd}</p>
                    <p style={style.bodyCopy}>&pound;{this.props.ethereum.ethereum.price.gbp}</p>
                </div>
            )
        }
        if (this.props.ethereum.isError) {
            eth = <p style={style.bodyCopy}>Ethereum data not available.</p>
        }

        return (
            <div style={style.blockCurrency}>{eth}</div>
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
