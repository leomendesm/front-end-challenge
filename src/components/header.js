import React from 'react'
import './header.css'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'
import {Link} from 'react-router-dom'
const Header = () => (
    <header>
        <Link to={'/'}><p className='logo'>Amaro</p></Link>
        <MdShoppingCart className='icon'/>
    </header>    
)
export default Header