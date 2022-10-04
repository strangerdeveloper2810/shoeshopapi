import React from 'react'
import Carts from './Carts'
import ProductList from './ProductList'

export default function Home(props) {
  return (
    <div>
        <h3 className="text-center text-success mt-3">Shoe Shop</h3>
        <ProductList/>
        <Carts/>
    </div>
  )
}
