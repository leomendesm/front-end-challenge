import React, { Component } from 'react'
import './listItem.css'
import { Link } from 'react-router-dom'

class ListItem extends Component {
    componentWillMount(){
        console.log(this.props.info)
        this.name = this.props.info.name 
        this.img = this.props.info.image || 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150'
        this.price = this.props.info.actual_price;
        this.oldPrice = (this.props.info.on_sale)? this.props.info.regular_price : ''
    }
    render() {
        return (
            <div className="item">
                <Link to={'/product/'+this.props.id}>
                    <img src={this.img} alt={this.name} />
                    <p className="product-name">{this.name}</p>
                    <p className='price'>{this.price} <span className='promo'>{this.oldPrice}</span></p>
                </Link>
            </div>
        )
    }
}
ListItem.defaultProps = {
    info:{
        name:'Unkown name',
        image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150'
    }
}
export default ListItem