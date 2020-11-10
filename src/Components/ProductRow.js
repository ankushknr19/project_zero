import React from 'react'
import ProductPreview from './ProductPreview'
import "./ProductRow.css"


function ProductRow() {
    return (
        <div className="productRow">
            <ProductPreview/>
            <ProductPreview/>
            <ProductPreview/>
            <ProductPreview/>
        </div>
    )
}

export default ProductRow
