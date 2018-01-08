import React, { Component } from 'react'
import ListProducts from '../../products.json'
import Button from './../common/button'
import style from '../../stylesheets/components/product.css'
const Size = ({size, handlerChecked, handlerChanged}) => (
    <label className={style.size}><input type="radio" value={size} 
    checked={handlerChecked === size} 
    onChange={handlerChanged} />{size}</label>
)

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
			size: ``,
        }
    }
    componentWillMount(){
        this.item = ListProducts.products[this.props.match.params.id]
        this.name = this.item.name
        this.img = this.item.image || 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150'
        this.price = this.item.actual_price;
        this.oldPrice = (this.item.on_sale)? this.item.regular_price : ''
        this.sizes = this.item.sizes.filter((s)=>s.available)
        this.promo = (this.item.discount_percentage)? this.item.discount_percentage+' OFF':''
    }
    sizeChange(e) {
        this.setState({
            size: e.currentTarget.value
        });
    }
    addToCart() {
        console.log('lil')
    }
    render() {
        const sizes = this.sizes.map((s, index)=><Size size={s.size} handlerChecked={this.state.size} handlerChanged={this.sizeChange.bind(this)} key={index} />)
        return (
            <div className={style.product}>
                <img src={this.img} alt={this.name} />
                <div className={style.info}>
                    <p className={style.productName}>{this.name}</p>
                    <p className={style.price}>{this.price} <span className={style.promo}>{this.oldPrice}</span><br /><br />{this.promo}</p>
                    <p className={style.sizeLabel}>Sizes</p>
                    <div className={style.sizes}>
                        {sizes}
                    </div>
                    <Button handlerClick={this.addToCart} disabled={this.state.size === ''} text={'Buy Now'} />
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