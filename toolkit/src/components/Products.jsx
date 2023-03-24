import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../redux/actions/cartActions'
import { addToCart } from '../store/cartSlice'

const Products = () => {
    const [products, setProducts] = useState([])
    // const product = useSelector(state => state.cart);
    const dispatch = useDispatch()
    
    const fetchProducts = async() => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        

        if(data && data.length > 0){
            setProducts(data)
        }
    }

    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }

    
    useEffect(() => {
        fetchProducts()
    },[])
    return (
        <div>
            <h1>Products</h1>
            {
                products.map((product) => {
                    return (
                        <div className="products" key={product.id}>
                            <span className="prod__single">
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.title} />
                            <p>{product.price}</p>
                            <button onClick={() => handleAdd(product)}>Add to cart</button>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
