import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
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

        </div>
    );
};

export default Cart;