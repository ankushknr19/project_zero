import React from 'react'
import ProductRow from './ProductRow'
import "./Home.css"
import BannerSlideshow from './BannerSlideshow'


function Home() {
    return (
        <div className="home">

            <BannerSlideshow />

            <div className="productContainer">
                <h1>Featured Products</h1>
                 <ProductRow />
                 <ProductRow />
                 <button> <span>Load More</span> </button>
            </div>         
        </div>
    )
}

export default Home
