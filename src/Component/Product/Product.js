import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const {name, seller, price, ratings, img} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt=""
            onError={(e) => {
                e.currentTarget.src = "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png";
            }}
            />
            <div style={{paddingBottom: '20px'}}>
                <h3>{name}</h3>
                <p className='price'>Price : ${price}</p>
                <p className='manufacturer'>Manufacturer : {seller}</p>
                <p className='rating'>Rating : {ratings}</p>
            </div>
                <button onClick={() => props.handleClick(props.product)} className='cart-btn'>
                <p >Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
        </div>
    );
};

export default Product;