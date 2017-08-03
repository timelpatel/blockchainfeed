import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchEthereum} from '../../actions/ethereum.js'
import EthereumBadge from '../../components/EthereumBadge/index.jsx'
import style from './style.js'


class EthereumPage extends Component {

    componentDidMount() {
        this.props.fetchEthereum()
    }

    render() {
        return (

            <div style={style.page}>
                <h2 style={style.h2}>Etheteum (ETC)</h2>

                {this.props.ethereum.isFetching && <p style={style.bodyCopy}>Loading...</p>}
                {this.props.ethereum.isError && <p style={style.bodyCopy}>Data not available.</p>}

                {this.props.ethereum.isComplete &&
                    <EthereumBadge
                        ethereumRateUsd={(this.props.ethereum.ethereum.price.usd).toFixed(2)}
                        ethereumRateGbp={(this.props.ethereum.ethereum.price.gbp).toFixed(2)}
                    />
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


export default connect(mapStateToProps, matchDispatchToProps)(EthereumPage)
