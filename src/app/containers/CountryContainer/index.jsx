import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectBlockchain} from '../../actions/index.js'


class CountryContainer extends Component {

    createListItems() {
        return this.props.bitcoin.map((bit) => {
            return (
                <div
                    key={bit.id}
                >
                    <p>1 DigitalCurrency</p>
                    <p
                        onClick={() => this.props.selectBlockchain(bit.id)}>
                            {bit.id} {bit.symbol} {bit.market_price_usd}
                    </p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.createListItems()}
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        bitcoin: state.bitcoin
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectBlockchain: selectBlockchain}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(CountryContainer)
