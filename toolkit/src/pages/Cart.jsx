import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'

const Cart = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const removePrd = (product) => {
        dispatch(removeFromCart(product))
    }
    return (
        <div>
            <h1>Cart</h1>
            {
                products.map((product) => {
                    return (
                        <div className="products" key={product.id}>
                            <span className="prod__single">
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.title} />
                            <p>{product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <button onClick={() => removePrd(product.id)}>Remove</button>
                            </span>
                        </div>
                    )
            }
            )}
        </div>
    )
}

export default Cart;
