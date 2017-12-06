import React, { Component } from 'react'
import ListProducts from '../products.json'
import ListItem from './listItem'
import style from '../stylesheets/components/productList.css'
class App extends Component {
  constructor(props){
    super(props)
    this.list = ListProducts
  }
  componentWillMount(){
  }
  
  render() {
    const products = this.list.products.map((a, index)=><ListItem info={a} id={index} key={index} />)
    return (
      <div className={style.productList}>
        {products}
      </div>
    );
  }
}

export default App
