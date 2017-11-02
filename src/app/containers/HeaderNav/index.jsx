import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {setCurrencyView, setMoneyCode} from '../../actions/app.js'
import style from './style.scss'


class HeaderNav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }

        this.handleMoneyCodeChange = this.handleMoneyCodeChange.bind(this)
        this.handleShowNav = this.handleShowNav.bind(this)
    }

    handleMoneyCodeChange(newMoneyCode) {
        this.props.setMoneyCode(newMoneyCode)
        this.setState({showNav: false})
    }

    handleShowNav() {
        if (this.state.showNav) {
            this.setState({showNav: false})
        } else {
            this.setState({showNav: true})
        }

    }

    render() {

        const moneyCodes = ['gbp','usd']
        const listMoneyCodes = moneyCodes.map((code) =>
            <li
                key={code}
                onClick={this.handleMoneyCodeChange.bind(this, code)}
            >
                <a href='#'>{code.toUpperCase()}</a>
            </li>
        )

        const currencyCodes = ['bitcoin','ethereum','litecoin']
        // const currencyCodes = this.props.currencies
        const listCurrencyCodes = currencyCodes.map((code) =>
            <li
                key={code}
                onClick={this.handleShowNav}
            >
                <Link to={code}>{code}</Link>
            </li>
        )


        return (

            <div>
                <p className='nav__money-code'>{this.props.moneyCode}</p>
                <button
                    className='nav__button'
                    onClick={this.handleShowNav}
                ><span className='text-hide'>Menu</span></button>

                {this.state.showNav &&
                    <div className='nav__menu'>
                        <div className='nav__menu-list'>
                            <p>Currency Information</p>
                            {/* <ul currencyView={this.props.currencyView}>{listCurrencyCodes}</ul> */}
                            <ul>{listCurrencyCodes}</ul>
                        </div>
                        <div className='nav__menu-list'>
                            <p>Show money in...</p>
                            <ul>{listMoneyCodes}</ul>
                        </div>
                    </div>
                }
            </div>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        currencyView: state.app.currencyView,
        currencies: state.app.currencies,
        moneyCode: state.app.moneyCode
        // moneyGbpSymbol: state.app.price.gbp.symbol,
        // moneyUsdSymbol: state.app.price.usd.symbol
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCurrencyView: setCurrencyView,
        setMoneyCode: setMoneyCode
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps) (HeaderNav)
