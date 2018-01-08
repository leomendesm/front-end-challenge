import React from 'react'

import style from '../../stylesheets/components/header.css'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'
import {Link} from 'react-router-dom'
const Header = () => (
    <header>
        <Link to={'/'}><p className={style.logo}>Amaro</p></Link>
        <MdShoppingCart className={style.icon} />
    </header>    
)
export default Header