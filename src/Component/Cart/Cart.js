import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // console.log(product.price)
        
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping;
        total = total + product.price * quantity;
    }

    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax)
    return (
        <div className='carts'>
             <h4 className='order-summary'>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</p>
                <div className='btn-container'>
                    <button className='clear-cart'><p>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <button style={{ backgroundColor: '#FF9900' }} className='review-order'><p>Review Order</p>
                        <p style={{ fontSize: '25px' }} href="/arrow">➜</p>
                    </button>
                </div>
        </div>
    );
};

export default Cart;