import React, { Children } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    let totalPrice= 0;
    let totalShipping=0;
    let totalQuantity =0;
    for(const product of cart){
        totalPrice = totalPrice+product.price * totalQuantity;
        totalShipping=totalShipping+product.shipping;
        totalQuantity=totalQuantity+product.quantity;
    }
    let tax = totalPrice*7/100;
    let grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={handleClearCart} className='btn-clear'>
                Clear Cart 
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;