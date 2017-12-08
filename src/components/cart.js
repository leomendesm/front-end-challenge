import React, { Component } from 'react'
import ItemCart from './itemCart'
import style from '../stylesheets/components/cart.css'
export default class Cart extends Component{
    render(){
        return (
            <div className={style.cart}>
                <ItemCart />
            </div>
        );
    }

} 