import React from 'react';

const CartItem=(props)=>{
    
    
        const {price,title,qty}=props.product; //getting property from js by objectd de-structuring
       const {
           product,
           onIncreaseQuantity,
           onDecreaseQuantity,
           onDelete
       }=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image} src={product.img} alt="Imag"/>
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
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        onClick={()=>onDelete(product)}
                        />
                    </div>
                </div>
            </div>
        );
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