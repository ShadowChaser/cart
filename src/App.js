import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super(); //When we are inheriting from some class first we need to call the constructer of that class
    this.state={
        products:[
            {
                price:999,
                title: 'Mobile Phone',
                qty:10,
                img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                id:1
            },
            {
                price:99,
                title: 'Watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
                id:2
            },
            {
                price:999,
                title: 'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                id:3
            }
        ]
    }
}

handleIncreaseQuantity =(product) =>{
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products:products
    })
}

handleDecreaseQuantity =(product) =>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0)
    {
        return
    }
    products[index].qty-=1;

    this.setState({
        products:products
    })
}

handleDelete =(product) =>{
    const{products}=this.state;
    const index=products.indexOf(product);
    
    products.splice(index,1);
    this.setState({
        products:products
    })
}

getCartCount=()=>{
  let count=0;
  const{products}=this.state;
  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
} 

CartTotal=()=>{
  let count=0;
  const{products}=this.state;
  products.forEach((product)=>{
    count+=(product.price*product.qty);
  })

  return count;
}

  render(){
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDelete={this.handleDelete}
      />
      <div style={{padding:10, fontSize:20}}>
        TOTAL: {this.CartTotal()}
      </div>
    </div>
  );
}
}
export default App;
