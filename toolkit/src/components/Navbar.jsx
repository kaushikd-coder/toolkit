import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const quantity = useSelector((state) => state.cart)
    return (
        <div style={{ display:"flex", alignItems: 'center', justifyContent:"space-between"}}>
            <h1>Redux Store</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <span className='cartCount'>Cart items: {quantity.length}</span>
            </div>
        </div>
    )
}

export default Navbar
