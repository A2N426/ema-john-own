import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedProduct = [];
        for (const id in storedCart) {
            const addedProduct = products.find(pd => pd.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(quantity);
                savedProduct.push(addedProduct);

            }
        }
        setCart(savedProduct);
    }, [products])
    const handleAddToCart = product => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const remaining = cart.filter(pd => pd.id !== product.id);
            product.quantity = product.quantity + 1;
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='link-style' to="/orders">
                        <button className='proceed-btn'>Review Order <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;