import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchEthereum} from '../../actions/ethereum.js'
import EthereumBadge from '../../components/EthereumBadge/index.jsx'
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
                {this.props.ethereum.isComplete &&
                    <EthereumBadge
                        ethereumUsdLast={(this.props.ethereum.ethereum.price.usd.last).toFixed(2)}
                        ethereumGbpLast={(this.props.ethereum.ethereum.price.gbp.last).toFixed(2)}
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
