import React, { Component } from 'react'
import ListProducts from '../products.json'
import Button from './button'
import './product.css'
const Size = ({size}) => (
    <div className="size"><p>{size}</p></div>
)
class Product extends Component {
    componentWillMount(){
        this.item = ListProducts.products[this.props.match.params.id]
        console.log(this.item)
        this.name = this.item.name
        this.img = this.item.image || 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150'
        this.price = this.item.actual_price;
        this.oldPrice = (this.item.on_sale)? this.item.regular_price : ''
        this.sizes = this.item.sizes.filter((s)=>s.available)
        this.promo = (this.item.discount_percentage)? this.item.discount_percentage+' OFF':''
        console.log(this.sizes)
    }
    render() {
        const sizes = this.sizes.map((s, index)=><Size size={s.size} key={index} />)
        return (
            <div className="product">
                <img src={this.img} alt={this.name} />
                <div className='info'>
                    <p className="product-name">{this.name}</p>
                    <p className='price'>{this.price} <span className='promo'>{this.oldPrice}</span><br /><br />{this.promo}</p>
                    <p className='size-label'>Sizes</p>
                    <div className='sizes'>
                        {sizes}
                    </div>
                    <Button text={'Buy Now'} />
                </div>
            </div>
        )
    }
}
Product.defaultProps = {
    info:{
        name:'Unkown name',
        image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150'
    }
}
export default Product