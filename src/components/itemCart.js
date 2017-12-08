import React,{Component} from 'react'
import style from '../stylesheets/components/itemCart.css'

class ItemCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 3,
            price: this.props.actual_price
        }
    }
    componentWillMount(){
        this.setState({price: this.state.price * this.state.quantity})
    }
    render(){
        return (
            <div className={style.item}>
                <img className={style.img} src={this.props.image} alt='imagem do produto' />
                <div>
                    <p>{this.props.name}</p>
                    <p>Size: {this.props.size_selected}</p>
                </div>
                <div>
                <p>R$ {this.props.actual_price}</p>
                <p>R$ {this.state.price}</p>
                </div>
            </div>    
        )
    }
}
ItemCart.defaultProps = {
    name:'Unkown name',
    image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20012667_014_main_1.jpg?1512043150',
    actual_price: 123.123,
    size_selected: 'P'
}

export default ItemCart