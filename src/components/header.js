import React from 'react'
import './header.css'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import MdSearch from 'react-icons/lib/md/search';
const Header = () => (
    <header>
    <MdShoppingCart className='icon'/>
    <MdSearch className='icon'/>
    </header>    
)
export default Header