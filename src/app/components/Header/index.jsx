import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'
import HeaderNav from '../../containers/HeaderNav/index.jsx'


const Header = () => (
    <header className='container__header'>
        <Link
            className='header__h1--hover'
            to='/'
        >
            <h1 className='header__h1'>TIMELAB DATA</h1>
        </Link>

        <HeaderNav />
    </header>
)

export default Header
