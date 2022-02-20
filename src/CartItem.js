import React from 'react';

class CartItem extends React.Component{
    //defining state in the component
    constructor(){
        super(); //When we are inheriting from some class first we need to call the constructer of that class
        this.state={
            price: 999,
            title: 'Phone',
            qty:1,
            img:''
        }
    }

    increaseQuantity =()=>{ // Arrow function will bind this with this function
        // console.log("this.state",this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });
        //setState form 2 - if prev State required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
    }

    decreaseQuantity =() =>{
        const {qty} =this.state;

        if(qty==0){
            return;
        }
            
        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }
    render (){
        const {price,title,qty}=this.state; //getting property from js by objectd de-structuring
       
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/v2/jpg/00/70/16/29/1000_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" 
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}
export default CartItem;