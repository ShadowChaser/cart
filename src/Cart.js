import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{

    constructor(){
        super(); //When we are inheriting from some class first we need to call the constructer of that class
        this.state={
            products:[
                {
                    price:999,
                    title: 'Mobile Phone',
                    qty:10,
                    img:'',
                    id:1
                },
                {
                    price:99,
                    title: 'Watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:999,
                    title: 'Laptop',
                    qty:1,
                    img:'',
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
        if(products[index].qty==0)
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

    render(){
        const{products}=this.state;
        return(
            <div className="cart"> 
                
                {products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDelete={this.handleDelete}
                    />
                })}
            </div>
        );
    }
}


export default Cart;