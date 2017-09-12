import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setMoneyCode} from '../../actions/app.js'
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
                {code.toUpperCase()}
            </li>
        )

        return (

            <div>
                <button
                    className='nav__button'
                    onClick={this.handleShowNav}
                >Menu</button>

                {this.state.showNav &&
                    <div className='nav__menu'>
                        <p className='text__body-copy text__body-header-nav'>Current currency - {this.props.moneyCode.toUpperCase()}</p>
                        <ul>{listMoneyCodes}</ul>
                    </div>
                }
            </div>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        moneyCode: state.app.moneyCode
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({setMoneyCode: setMoneyCode}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps) (HeaderNav)
