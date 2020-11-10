import React from 'react'
import "./AllProducts.css"
import ProductPreview from './ProductPreview'

function AllProducts() {
    return (
        <div className="allProducts">
            <h1>All Products</h1>
            <div className="productsRow">
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            </div>         
        </div>
    )
}

export default AllProducts
