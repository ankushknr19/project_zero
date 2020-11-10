import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'
import Checkout from './Checkout'

function Cart() {
    return (
        <div className="cart">
            <div className="cart__left">
                <h1>My Cart (3 items)</h1>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cart__right">
                <h1>Checkout</h1>
                <Checkout />
            </div>
        </div>
    )
}

export default Cart
