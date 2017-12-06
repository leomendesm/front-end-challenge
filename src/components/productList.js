import React, { Component } from 'react'
import ListProducts from '../products.json'
import ListItem from './listItem'
import './productList.css'
class App extends Component {
  constructor(props){
    super(props)
    this.list = ListProducts
  }
  componentWillMount(){
  }
  
  render() {
    const products = this.list.products.map((a, index)=><ListItem info={a} key={index} />)
    return (
      <div className='product-list'>
        {products}
      </div>
    );
  }
}

export default App
