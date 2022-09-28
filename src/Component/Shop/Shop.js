import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCard = getStoredCart()

        const savedCart = [];
        for (const id in storedCard) {
            const findProduct = products.find(product => product.id === id)
            if (findProduct) {
                const quantity = storedCard[id];
                findProduct.quantity = quantity;
                savedCart.push(findProduct)
                
            }
        }
        setCart(savedCart)
    }, [products])



    const handleClick = (product) => {
        let newProduct = [];
        const exists = cart.find(singleProduct => singleProduct.id === product.id);
        if(!exists){
            product.quantity = 1;
            newProduct = [...cart, product];
        }
        else {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newProduct = [...rest, exists]
        }
        
        
        setCart(newProduct);
        addToDb(product.id);

    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleClick={handleClick}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;