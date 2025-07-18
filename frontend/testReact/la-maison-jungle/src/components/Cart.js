import React from 'react';
import '../styles/Cart.css';

function Cart() {
    let monstera_price = 8, lierre_price = 10, bouquet_price = 15;
    return (<div className='lmj-cart'>
            <h3>Cart</h3>
            <ul>
                <li>Monstera : { monstera_price } $</li>
                <li>Lierre   : { lierre_price } $</li>
                <li>Bouquet  : { bouquet_price } $</li>
                <li>Total    : { monstera_price + lierre_price + bouquet_price } $</li>
            </ul>
        </div>);
}

export default Cart;