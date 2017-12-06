import React, { Component } from 'react'
import ListProducts from '../products.json'
import './product.css'

class Product extends Component {
    componentWillMount(){
        this.item = ListProducts[this.props.match.params.id]
        console.log(this.item)
        this.name = this.props.info.name 
        this.img = this.props.info.image || 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139'
        this.price = this.props.info.actual_price;
        this.oldPrice = (this.props.info.on_sale)? this.props.info.regular_price : ''
    }
    render() {
        return (
            <div className="product">
                <img src={this.img} alt={this.name} />
                <p className="product-name">{this.name}</p>
                <p className='price'>{this.price} <span className='promo'>{this.oldPrice}</span></p>
            </div>
        )
    }
}
Product.defaultProps = {
    info:{
        name:'Unkown name',
        image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139'
    }
}
export default Product