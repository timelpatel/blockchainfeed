import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.js'


const Header = () => (
    <header style={style.header}>
        <Link
            style={style.header__h1_hover}
            to='/'
        ><h1 style={style.header__h1}>TIMELAB DATA</h1></Link>
    </header>
)

export default Header;
