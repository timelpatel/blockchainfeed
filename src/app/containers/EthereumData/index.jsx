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

        return (
            <div style={style.blockCurrency}>

                {this.props.ethereum.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.ethereum.isError && <p style={style.bodyCopy}>Data not available.</p>}
                {this.props.ethereum.isComplete &&
                    <div>
                        <p style={Object.assign({}, style.bodyCopy, style.bold)}>1 Ethereum</p>
                        <p style={style.bodyCopy}>&#36;{this.props.ethereum.ethereum.price.usd}</p>
                        <p style={style.bodyCopy}>&pound;{this.props.ethereum.ethereum.price.gbp}</p>
                    </div>
                }

            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        ethereum: state.ethereum,
        isComplete: state.isComplete,
        isError: state.isError,
        isFetching: state.isFetching
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchEthereum: fetchEthereum}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(EthereumData)
